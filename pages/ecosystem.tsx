import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import { staticRequest, gql } from "tinacms";
import { HeadProps } from "components/primitives/head";
import { useTranslation } from "next-i18next";
import { Box } from "theme-ui";
import { DefaultList } from "components/sections/ecosystem/default-list";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "components/sections/ecosystem/header";
import { Subnav } from "components/sections/ecosystem/subnav";

function AppSection({ apps }) {
  return (
    <Box sx={{ bg: "muted", px: 3, py: "80px" }}>
      <DefaultList
        inverted={false}
        apps={apps}
        title="Apps"
        subtitle="Applications built using Livepeer video infrastructure."
        cardType="app"
      />
    </Box>
  );
}

function VideoToolSection({ videos }) {
  return (
    <Box sx={{ bg: "text", px: 3, py: "80px" }}>
      <DefaultList
        inverted={true}
        apps={videos}
        title="Video Tools"
        subtitle="Tools to integrate with the Livepeer network. Hosted Gateway for the
    most seamless integration, or Self-Hosted for total customization."
        cardType="video"
      />
    </Box>
  );
}

function Web3Section({ web3 }) {
  return (
    <Box sx={{ px: 3, py: "80px" }}>
      <DefaultList
        inverted={false}
        apps={web3}
        title="Web3 Tech Stack"
        subtitle="Livepeer partners and key protocols in the emerging web3 tech stack."
        cardType="web3"
      />
    </Box>
  );
}
function StakingPlatformSection({ staking }) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#FAFAFA, #FFFFFF)",
          width: "100%",
          height: "80px",
        }}
      />
      <Box sx={{ px: 3, py: "80px" }}>
        <DefaultList
          inverted={false}
          apps={staking}
          title="Staking Partners"
          subtitle="Specialized staking services for Livepeer delegators."
          cardType="staking"
        />
      </Box>
    </>
  );
}
function ExchangeSection({ exchanges }) {
  return (
    <Box sx={{ bg: "#FAFAFA", px: 3, py: "80px" }}>
      <DefaultList
        inverted={false}
        apps={exchanges}
        title="Exchanges"
        subtitle="Platforms listing Livepeer Token (LPT)."
        cardType="exchange"
      />
    </Box>
  );
}

function CommunitySection({ communities }) {
  return (
    <Box sx={{ px: 3, py: "80px" }}>
      <DefaultList
        inverted={false}
        apps={communities}
        title="Community Tools"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat blandit tellus luctus amet felis sit ullamcorper."
        cardType="community"
      />
    </Box>
  );
}

function Ecosystem({ apps, web3, videos, communities, exchanges, staking }) {
  const { t } = useTranslation(["home"]);
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
    <PageLayout headProps={headProps} navProps={{ isInmersive: true }}>
      <Header />
      <Subnav />
      <Box
        sx={{
          background: "linear-gradient(#FFFFFF, #FAFAFA)",
          width: "100%",
          height: "80px",
        }}
      />
      {apps && <AppSection apps={apps} />}
      {videos && <VideoToolSection videos={videos} />}
      {web3 && <Web3Section web3={web3} />}
      {staking && <StakingPlatformSection staking={staking} />}
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
                linkedin
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
  const stakingData: any = await staticRequest({
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
  const staking = stakingData?.getStakingList?.edges;
  const web3 = web3Data?.getWeb3List?.edges;
  const apps = appsData?.getAppsList?.edges;

  return {
    props: {
      apps,
      web3,
      videos,
      communities,
      exchanges,
      staking,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
    revalidate: 1,
  };
}

export default Ecosystem;
