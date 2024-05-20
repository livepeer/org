import HomeHero from "components/sections/home/hero";
import PrimerBanner from "components/sections/home/primer-banner";
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do";
import CommunitySection from "components/sections/home/community";
import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import Ecosystem from "components/sections/home/ecosystem";
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk";

import {
  getProtocolStatistics,
  getTotalActiveNodes,
  getTotalMinutes,
} from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Box } from "@livepeer/design-system";

const HomePage = ({ totalActiveNodes, totalMinutes, totalVolumeUSD }) => {
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
    <PageLayout headProps={headProps} navProps={{ isInmersive: true }}>
      <HomeHero
        title={router.locale !== "en" && t("page-home-title")}
        subtitle={
          <Box>
            Livepeer is a video infrastructure network for live and on-demand
            streaming. Designed to give developers the freedom to innovate,
            creators autonomy from platforms, and viewers a choice in their
            experience.
          </Box>
        }
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
      {/* <LetTheNumbersTalkSection
        label1={t("video-miners:page-video-miners-numbers-nodes-text")}
        label2={t("video-miners:page-video-miners-numbers-fees-text")}
        label3={t("video-miners:page-video-miners-numbers-cost-text")}
        totalActiveNodes={totalActiveNodes}
        totalMinutes={totalMinutes}
        totalVolume={totalVolumeUSD}
      /> */}
      <Ecosystem
        label="The Livepeer Ecosystem"
        title="A growing network of open video apps"
        subtitle="By combining Livepeer’s open video API with other emerging open protocols in social and onchain finance, developers are disrupting the way creators own and monetize their video content, enabling novel experiences in music, entertainment, shopping, gaming, and beyond."
        items={[
          {
            title: "The Lot Radio",
            description:
              "Independent, non-profit, online radio station live streaming 24/7 from a reclaimed shipping container on an empty lot in NYC",
            imageUrl:
              "https://res.cloudinary.com/duquzk7m6/image/upload/v1667851537/The_Lot_Radio_eusgte.png",
            label: "thelotradio.com",
            url: "https://www.thelotradio.com/",
          },
          {
            title: "Unlonely",
            description:
              "Crypto-native livestreaming platform with fun, gamified features",
            imageUrl:
              "https://github.com/livepeer/studio/assets/555740/f14a76c6-388d-4e95-a301-947837d3645f",
            label: "unlonely.app",
            url: "https://www.unlonely.app/",
          },
          {
            title: "StreamETH",
            description:
              "StreamETH is an open video CMS for organizing virtual or hybrid events.",
            imageUrl:
              "https://github.com/livepeer/org/assets/555740/cc43c5c3-f359-4c1f-91a3-e95a3f00eb72",
            label: "streameth.org",
            url: "https://streameth.org",
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
        ]}
      />
      <CommunitySection
        title={t("page-home-communities-title")}
        subtitle={t("page-home-communities-text")}
        label={t("page-home-communities")}
      />
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

  const { totalActiveStake } = await getProtocolStatistics();

  return {
    props: {
      totalVolumeUSD,
      totalActiveNodes,
      totalMinutes,
      totalActiveStake,
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
