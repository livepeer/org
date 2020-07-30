import { request } from "graphql-request"

/**
 *
 * Problem: `offsetLeft` only returns offset to parent element
 * Solution: Iterate through all parent elements and sum all offsets
 */
const getPageOffsetLeft = (elem: HTMLElement | null) => {
  if (!elem) return
  let distance = 0
  do {
    distance += elem.offsetLeft
    elem = elem.offsetParent as HTMLElement | null
  } while (elem)
  return distance < 0 ? 0 : distance
}

const nFormatter = (num, digits) => {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ]
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, "$1") + " " + si[i].symbol
  )
}

const getTotalActiveStake = async () => {
  const graphqlResponse = await fetch(
    "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: '{ protocol(id: "0") { totalActiveStake } } '
      })
    }
  )
  const {
    data: {
      protocol: { totalActiveStake }
    }
  } = await graphqlResponse.json()
  return totalActiveStake
}

const getTotalGeneratedFees = async () => {
  const graphqlResponse = await fetch(
    "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: '{ protocol(id: "0") { totalGeneratedFees } } '
      })
    }
  )
  const {
    data: {
      protocol: { totalGeneratedFees }
    }
  } = await graphqlResponse.json()
  return totalGeneratedFees
}

const getTotalDelegators = async () => {
  const PAGE_SIZE = 100
  const reqDelegators = async (skip) => {
    const query = `query delegators ($skip: Int $where: Delegator_filter) {
    delegators(skip: $skip where: $where) {
      id
    }
  }`
    let response = await request(
      "https://api.thegraph.com/subgraphs/name/livepeer/livepeer",
      query,
      {
        first: PAGE_SIZE,
        skip: skip,
        where: {
          bondedAmount_not: 0
        }
      }
    )
    return response.delegators
  }

  let delegators = []
  let keepGoing = true
  let skip = 0
  while (keepGoing) {
    let response = await reqDelegators(skip)
    await delegators.push.apply(delegators, response)
    skip += PAGE_SIZE
    if (response.length < PAGE_SIZE) {
      keepGoing = false
    }
  }
  return delegators.length
}

export {
  getPageOffsetLeft,
  nFormatter,
  getTotalActiveStake,
  getTotalDelegators,
  getTotalGeneratedFees
}
