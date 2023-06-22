import HomeHero from "components/sections/home/hero";
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do";
import PrimerBanner from "components/sections/home/primer-banner";
import CommunitySection from "components/sections/home/community";
import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import OneAPI from "components/sections/home/one-api";
import StartBuilding from "components/sections/home/start-building";
import Ecosystem from "components/sections/home/ecosystem";
import HaveACallSection from "components/sections/home/have-a-call";
import WhyLivepeerSection from "components/sections/home/why-livepeer";
import {
  getProtocolStatistics,
  getTotalActiveNodes,
  getTotalMinutes,
} from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HomePage = ({
  youtubeVideos,
  totalVolumeUSD,
  totalActiveNodes,
  totalMinutes,
}) => {
  const router = useRouter();
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
      <OneAPI />
      <StartBuilding />
      <WhyLivepeerSection
        label="Why Livepeer Protocol"
        title="A globally distributed, open infrastructure network"
        subtitle="What makes Livepeer Protocol so scalable, reliable, and affordable? Enter the Livepeer Network, an open and permissionless peer-to-peer network of independent operators intelligently routing and processing video."
      />
      <PrimerBanner
        label={t("page-home-primer")}
        title={t("page-home-primer-title")}
        subtitle={t("page-home-primer-text")}
        ctaText={t("page-home-primer-cta")}
      />
      <Ecosystem
        label="The Livepeer Ecosystem"
        title="A growing network of open video apps"
        subtitle="By combining Livepeer’s open video API with other emerging open protocols in social and onchain finance, developers are disrupting the way creators own and monetize their video content, enabling novel experiences in music, entertainment, shopping, gaming, and beyond."
        items={[
          {
            title: "Lenstube",
            description:
              "A social platform for video sharing built with Livepeer and Lens.",
            imageUrl:
              "https://user-images.githubusercontent.com/555740/232839442-6368d099-27f6-4bbd-80e2-dc577305c3d0.png",
            label: "lenstube.xyz",
            url: "https://lenstube.xyz/",
          },
          {
            title: "Beem",
            description:
              "Build your custom video streaming site and mobile app with no code.",
            imageUrl:
              "https://user-images.githubusercontent.com/555740/232841881-789ef394-35d1-48b5-95c7-aaef589b1d64.png",
            label: "beem.xyz",
            url: "https://beem.xyz",
          },
          {
            title: "Bonfire",
            description:
              "Bonfire gives you the tools to start, grow, and manage communities.",
            imageUrl:
              "https://res.cloudinary.com/duquzk7m6/image/upload/v1667850687/Bonfire_enwrkq.png",
            label: "bonfire.xyz",
            url: "https://www.bonfire.xyz",
          },
          {
            title: "Orb",
            description:
              "A decentralized social media client built with Lens and Livepeer.",
            imageUrl:
              "https://user-images.githubusercontent.com/555740/232842347-b8a05451-4b24-4027-8a2e-a2dd6246482d.png",
            label: "orb.ac",
            url: "https://orb.ac",
          },
          {
            title: "Xeenon",
            description:
              "Get paid to stream with an open video streaming platform.",
            imageUrl:
              "https://user-images.githubusercontent.com/555740/232843817-3fb0054e-7b70-452a-b3f3-f2382be9f9dc.png",
            label: "xeenon.xyz",
            url: "https://xeenon.xyz",
          },
        ]}
      />
      {/* <LetLivepeerDoSection
        label={t("page-home-get-started")}
        title={t("page-home-what-role")}
        subtitle={t("page-home-jump-in")}
        tokenholders={{
          title: t("page-home-tokenholders"),
          description: t("page-home-tokenholders-text"),
        }}
        videoMiners={{
          title: t("page-home-video-miners"),
          description: t("page-home-video-miners-text"),
        }}
      /> */}

      <CommunitySection
        title={t("page-home-communities-title")}
        subtitle={t("page-home-communities-text")}
        label={t("page-home-communities")}
      />
      {/* <HaveACallSection
        title={t("page-home-call")}
        subtitle={t("page-home-call-text")}
        youtubeVideos={youtubeVideos}
      /> */}
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  let totalMinutes = 0;
  const { totalVolumeUSD } = await getProtocolStatistics();
  const totalActiveNodes = await getTotalActiveNodes();
  if (process.env.LIVEPEER_COM_API_ADMIN_TOKEN) {
    totalMinutes = await getTotalMinutes();
  }

  let youtubeVideos = [];

  if (process.env.YOUTUBE_API_KEY) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLkw6hm1fcjtEo9HydrGKP2R_NHhSu1Mpl&key=${process.env.YOUTUBE_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch youtube videos: " + response.statusText);
    }

    const youtubeData = await response.json();
    youtubeVideos = youtubeData.items;
  }

  const { totalActiveStake } = await getProtocolStatistics();

  return {
    props: {
      totalVolumeUSD,
      totalActiveNodes,
      totalMinutes,
      totalActiveStake,
      youtubeVideos: youtubeVideos.filter(
        (v) => v.snippet.title !== "Deleted video"
      ),
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "video-miners",
      ])),
    },
    revalidate: 1,
  };
}

export default HomePage;
