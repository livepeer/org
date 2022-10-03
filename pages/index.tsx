import HomeHero from "components/sections/home/hero";
import ByTheNumbersSection from "components/sections/home/by-the-numbers";
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do";
import PrimerBanner from "components/sections/home/primer-banner";
import CommunitySection from "components/sections/home/community";
import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import { staticRequest, gql } from "tinacms";
import HaveACallSection from "components/sections/home/have-a-call";
import { getProtocolStatistics } from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Box, Heading } from "theme-ui";

function AppSection({ apps }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {apps.map((app) => {
        const { title, image } = app.node.data || {};
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
  );
}

const HomePage = ({
  youtubeVideos,
  totalActiveStake,
  apps,
  web3,
  videos,
  communities,
  exchanges,
  stackings,
}) => {
  const router = useRouter();
  const { t } = useTranslation(["home"]);
  console.log(
    "props tina data: ",
    web3,
    videos,
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
      pushContentSx={{ marginTop: "-72px" }}>
      <HomeHero
        title={router.locale !== "en" && t("page-home-title")}
        subtitle={t("page-home-intro")}
        cta={t("page-home-get-started")}
        videoLabel={t("page-home-live")}
      />
      <LetLivepeerDoSection
        label={t("page-home-get-started")}
        title={t("page-home-what-role")}
        subtitle={t("page-home-jump-in")}
        tokenholders={{
          title: t("page-home-tokenholders"),
          description: t("page-home-tokenholders-text"),
        }}
        developers={{
          title: t("page-home-developers"),
          description: t("page-home-developers-text"),
        }}
        videoMiners={{
          title: t("page-home-video-miners"),
          description: t("page-home-video-miners-text"),
        }}
      />
      <PrimerBanner
        label={t("page-home-primer")}
        title={t("page-home-primer-title")}
        subtitle={t("page-home-primer-text")}
        ctaText={t("page-home-primer-cta")}
      />
      <ByTheNumbersSection
        title={t("page-home-stats-title")}
        subtitle={t("page-home-stats-text")}
        label={t("page-home-stats")}
        totalActiveStake={totalActiveStake}
      />
      <CommunitySection
        title={t("page-home-communities-title")}
        subtitle={t("page-home-communities-text")}
        label={t("page-home-communities")}
      />
      <HaveACallSection
        title={t("page-home-call")}
        subtitle={t("page-home-call-text")}
        ctaText={t("page-home-call-cta")}
        youtubeVideos={youtubeVideos}
      />
      {apps && <AppSection apps={apps} />}
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  let youtubeVideos = [];

  if (process.env.YOUTUBE_API_KEY) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLkw6hm1fcjtEo9HydrGKP2R_NHhSu1Mpl&key=${process.env.YOUTUBE_API_KEY}`
    );

    const youtubeData = await response.json();
    youtubeVideos = youtubeData.items;
  }

  const { totalActiveStake } = await getProtocolStatistics();

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
      youtubeVideos: youtubeVideos.filter(
        (v) => v.snippet.title !== "Deleted video"
      ),
      totalActiveStake,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
    revalidate: 1,
  };
}

export default HomePage;
