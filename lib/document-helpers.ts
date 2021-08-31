import { request } from "graphql-request";

/**
 *
 * Problem: `offsetLeft` only returns offset to parent element
 * Solution: Iterate through all parent elements and sum all offsets
 */
const getPageOffsetLeft = (elem: HTMLElement | null) => {
  if (!elem) return;
  let distance = 0;
  do {
    distance += elem.offsetLeft;
    elem = elem.offsetParent as HTMLElement | null;
  } while (elem);
  return distance < 0 ? 0 : distance;
};

const nFormatter = (num, digits) => {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, "$1") + " " + si[i].symbol
  );
};

const getProtocolStatistics = async () => {
  const graphqlResponse = await fetch(
    "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
          protocol(id: "0") { 
            inflation
            inflationChange
            totalSupply
            totalActiveStake
            targetBondingRate
            participationRate
            totalVolumeUSD
          } 
        }`,
      }),
    }
  );
  const { data } = await graphqlResponse.json();
  return {
    ...data.protocol,
  };
};

const getTotalActiveNodes = async () => {
  const query = `query transcoders ($where: Transcoder_filter) {
    transcoders(where: $where) {
      id
    }
  }`;
  let response = await request(
    "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
    query,
    {
      where: {
        active: true,
      },
    }
  );
  return response.transcoders.length;
};

const getTotalDelegators = async () => {
  const PAGE_SIZE = 100;
  const reqDelegators = async (skip) => {
    const query = `query delegators ($skip: Int $where: Delegator_filter) {
    delegators(skip: $skip where: $where) {
      id
    }
  }`;
    let response = await request(
      "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
      query,
      {
        first: PAGE_SIZE,
        skip: skip,
        where: {
          bondedAmount_not: 0,
        },
      }
    );
    return response.delegators;
  };

  let delegators = [];
  let keepGoing = true;
  let skip = 0;
  while (keepGoing) {
    let response = await reqDelegators(skip);
    await delegators.push.apply(delegators, response);
    skip += PAGE_SIZE;
    if (response.length < PAGE_SIZE) {
      keepGoing = false;
    }
  }
  return delegators.length;
};

export {
  getPageOffsetLeft,
  nFormatter,
  getTotalDelegators,
  getTotalActiveNodes,
  getProtocolStatistics,
};

type LivepeerComUsageParams = {
  fromTime: number;
  toTime: number;
};

export const getLivepeerComUsageData = async (
  params?: LivepeerComUsageParams
) => {
  try {
    const endpoint = `https://livepeer.com/api/usage${
      params ? `?fromTime=${params.fromTime}&toTime=${params.toTime}` : ""
    }`;

    const livepeerComUsageDataReponse = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.LIVEPEER_COM_API_ADMIN_TOKEN}`,
      },
    });

    const livepeerComUsageData = await livepeerComUsageDataReponse.json();
    return livepeerComUsageData;
  } catch (e) {
    console.log(e);
  }
};

// the # of pixels in a minute of 240p30fps, 360p30fps, 480p30fps, 720p30fps transcoded renditions.
// (width * height * framerate * seconds in a minute)
const pixelsPerMinute = 2995488000;

// Date to price mapping used to calculate estimated usage
// based on the Livepeer.com broadcaster's max price
const pricePerPixel = [
  {
    startDate: 1577836800,
    endDate: 1616457600,
    price: 0.000000000000006, // (6000 wei)
  },
  {
    startDate: 1616457600,
    endDate: 1620201600,
    price: 0.000000000000003, // (3000 wei)
  },
  {
    startDate: 1620201600,
    endDate: 1621465200,
    price: 0.0000000000000006,
  }, // (600 wei),
  { startDate: 1621465200, endDate: Infinity, price: 0.0000000000000012 }, // (1200 wei)
];

const getFeeDerivedMinutes = ({
  totalVolumeETH,
  totalVolumeUSD,
  pricePerPixel,
  pixelsPerMinute,
}): number => {
  const ethDaiRate = totalVolumeETH / totalVolumeUSD;
  const usdAveragePricePerPixel = pricePerPixel / ethDaiRate;
  const feeDerivedMinutes =
    totalVolumeUSD / usdAveragePricePerPixel / pixelsPerMinute || 0;
  return feeDerivedMinutes;
};

const getTotalFeeDerivedMinutes = async () => {
  let totalFeeDerivedMinutes = 0;
  let pricePerPixelIndex = pricePerPixel.length - 1;

  const res = await fetch(
    "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
    query days(
      $first: Int
      $orderBy: Day_orderBy
      $orderDirection: OrderDirection
    ) {
      days(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
        date
        volumeUSD
        volumeETH
        participationRate
      }
    }
      `,
        variables: {
          first: 1000,
          orderBy: "date",
          orderDirection: "desc",
        },
      }),
    }
  );

  const dayData = await res.json();

  dayData.data.days.map((item) => {
    // if Livepeer.com's broadcaster changed max price, use updated price
    if (
      pricePerPixelIndex &&
      item.date < pricePerPixel[pricePerPixelIndex].startDate
    ) {
      pricePerPixelIndex--;
    }

    const feeDerivedMinutes = getFeeDerivedMinutes({
      pricePerPixel: pricePerPixel[pricePerPixelIndex].price,
      totalVolumeETH: +item.volumeETH,
      totalVolumeUSD: +item.volumeUSD,
      pixelsPerMinute,
    });

    totalFeeDerivedMinutes += feeDerivedMinutes;
  });

  return totalFeeDerivedMinutes;
};

export const getTotalMinutes = async () => {
  const livepeerComDayData = await getLivepeerComUsageData();
  const totalLivepeerComUsage = livepeerComDayData.reduce((x, y) => {
    return x + y.sourceSegmentsDuration / 60;
  }, 0);
  const totalFeeDerivedMinutes = await getTotalFeeDerivedMinutes();
  return totalFeeDerivedMinutes + totalLivepeerComUsage;
};
