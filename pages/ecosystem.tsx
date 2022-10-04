import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import { staticRequest, gql } from "tinacms";
import { HeadProps } from "components/primitives/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Box, Heading, Text } from "theme-ui";
import { DefaultCard } from "components/sections/ecosystem/default-card";

function AppSection({ apps }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Apps
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Applications built using Livepeer video infrastructure.
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {apps.map((app, i) => {
          const { title, image, richtext } = app.node.data || {};
          return (
            <DefaultCard key={title + i} title={title} richtext={richtext} />
          );
        })}
      </Box>
    </Box>
  );
}

function VideoToolSection({ videos }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Video Tools
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Tools to integrate with the Livepeer network. Hosted Gateway for the
        most seamless integration, or Self-Hosted for total customization.
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {videos.map((video) => {
          const { title, image } = video.node.data || {};
          return (
            <Box key={title} sx={{ padding: "40px" }}>
              <Heading sx={{ variant: ["text.heading.4", "text.heading.4"] }}>
                {title}
              </Heading>
              <img src={image} alt={title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Web3Section({ web3 }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Web3 Tech Stack
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Livepeer partners and key protocols in the emerging web3 tech stack.
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {web3.map((web) => {
          const { title, image } = web.node.data || {};
          return (
            <Box key={title} sx={{ padding: "40px" }}>
              <Heading sx={{ variant: ["text.heading.4", "text.heading.4"] }}>
                {title}
              </Heading>
              <img src={image} alt={title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
function StackingPlatformSection({ stackings }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Staking Partners
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Specialized staking services for Livepeer delegators.
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {stackings.map((stacking) => {
          const { title, image } = stacking.node.data || {};
          return (
            <Box key={title} sx={{ padding: "40px" }}>
              <Heading sx={{ variant: ["text.heading.4", "text.heading.4"] }}>
                {title}
              </Heading>
              <img src={image} alt={title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
function ExchangeSection({ exchanges }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Exchanges
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Platforms listing Livepeer Token (LPT).
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {exchanges.map((exchange) => {
          const { title, image } = exchange.node.data || {};
          return (
            <Box key={title} sx={{ padding: "40px" }}>
              <Heading sx={{ variant: ["text.heading.4", "text.heading.4"] }}>
                {title}
              </Heading>
              <img src={image} alt={title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function CommunitySection({ communities }) {
  return (
    <Box>
      <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
        Community Tools
      </Heading>
      <Heading variant="section.subtitle" sx={{ maxWidth: 700 }} mt={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
        blandit tellus luctus amet felis sit ullamcorper.
      </Heading>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {communities.map((communitie) => {
          const { title, image } = communitie.node.data || {};
          return (
            <Box key={title} sx={{ padding: "40px" }}>
              <Heading sx={{ variant: ["text.heading.4", "text.heading.4"] }}>
                {title}
              </Heading>
              <img src={image} alt={title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Ecosystem({ apps, web3, videos, communities, exchanges, stackings }) {
  const router = useRouter();
  const { t } = useTranslation(["home"]);
  console.log(
    "props tina data: ",
    web3,
    { videos },
    communities,
    exchanges,
    stackings
  );
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);

  const headProps: HeadProps = {
    meta: {
      title: t("page-home-meta-title"),
      description: t("page-home-meta-description"),
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <PageLayout
      headProps={headProps}
      navProps={{ isInmersive: true }}
      pushContentSx={{ marginTop: "32px" }}>
      {apps && <AppSection apps={apps} />}
      {videos && <VideoToolSection videos={videos} />}
      {web3 && <Web3Section web3={web3} />}
      {stackings && <StackingPlatformSection stackings={stackings} />}
      {exchanges && <ExchangeSection exchanges={exchanges} />}
      {communities && <CommunitySection communities={communities} />}
    </PageLayout>
  );
}

export async function getStaticProps({ locale }) {
  const appsData: any = await staticRequest({
    query: gql`
      query GetAppsList {
        getAppsList {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
                twitter
                discord
              }
            }
          }
        }
      }
    `,
  });
  const videosData: any = await staticRequest({
    query: gql`
      query GetVideosList {
        getVideosList {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
              }
            }
          }
        }
      }
    `,
  });
  const web3Data: any = await staticRequest({
    query: gql`
      query GetWeb3List {
        getWeb3List {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
              }
            }
          }
        }
      }
    `,
  });
  const stackingsData: any = await staticRequest({
    query: gql`
      query GetStakingList {
        getStakingList {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
                twitter
              }
            }
          }
        }
      }
    `,
  });
  const exchangeData: any = await staticRequest({
    query: gql`
      query GetExchangeList {
        getExchangeList {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
                twitter
                telegram
              }
            }
          }
        }
      }
    `,
  });
  const communityRes: any = await staticRequest({
    query: gql`
      query GetComunityList {
        getComunityList {
          edges {
            node {
              sys {
                filename
              }
              data {
                image
                title
                richtext
                website
              }
            }
          }
        }
      }
    `,
  });

  const communities = communityRes?.getComunityList?.edges;
  const videos = videosData?.getVideosList?.edges;
  const exchanges = exchangeData?.getExchangeList?.edges;
  const stackings = stackingsData?.getStakingList?.edges;
  const web3 = web3Data?.getWeb3List?.edges;
  const apps = appsData?.getAppsList?.edges;

  console.log("postListData", appsData);
  console.log({ apps });

  return {
    props: {
      apps,
      web3,
      videos,
      communities,
      exchanges,
      stackings,
    },
    revalidate: 1,
  };
}

export default Ecosystem;
