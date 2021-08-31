import IsOpenSourceSection from "components/sections/developers/is-open-source";
import PageLayout from "components/layouts/page";
import DevelopersHero from "components/sections/developers/hero";
import HugeCardSection from "components/sections/developers/huge-card";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Box } from "theme-ui";

const Developers = () => {
  const { t } = useTranslation(["developers"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-developers-meta-title"),
      description: t("page-developers-meta-description"),
      url: "https://livepeer.org/developers",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout headProps={headProps} pushContentSx={{ bg: "text" }}>
      <DevelopersHero
        title={t("page-developers-title")}
        subtitle={t("page-developers-intro")}
      />
      <HugeCardSection
        card={{
          label: <Box>Build with the Livepeer.com</Box>,
          title: (
            <Box>
              Gateway<Box>API.</Box>
            </Box>
          ),
          list: [
            {
              title: "Easy-to-use API",
              subtitle:
                "Straight forward APIs make integrating with Livepeer quick and easy. Build your own streaming platform in days not months.",
            },
            {
              title: "Affordable",
              subtitle:
                "Affordable transcoding backed by the Livepeer network allows you to operate a UGC streaming platform with millions of content creators.",
            },
            {
              title: "Scalable",
              subtitle:
                "Freedom to scale up or down so you can manage content creator demand without over investing in infrastructure.",
            },
            {
              title: "Reliable",
              subtitle:
                "Ensure content creator audiences remain engaged by delivering high quality streams with 99.99% reliability.",
            },
          ],
          ctaText: t("page-developers-hosted-service-cta"),
        }}
      />
      <IsOpenSourceSection
        title={t("page-developers-open-source")}
        subtitle={t("page-developers-open-source-text")}
        ctaText={t("page-developers-open-source-cta")}
        label1={t("page-developers-stats-contributors-text")}
        label2={t("page-developers-stats-stargazers-text")}
        label3={t("page-developers-stats-languages-text")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "developers"])),
    },
    revalidate: 1,
  };
}

export default Developers;
