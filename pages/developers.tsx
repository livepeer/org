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
          label: <Box>Build with Livepeer Video Services</Box>,
          title: (
            <Box>
              Gateway<Box>APIs</Box>
            </Box>
          ),
          list: [
            {
              title: "Accessible",
              subtitle:
                "Straightforward, no nonsense product and documentation designed for developers. Build your own streaming app in days, not months.",
            },
            {
              title: "Affordable",
              subtitle:
                "Extraordinary cost savings up to 10x less expensive than centralized industry standards.",
            },
            {
              title: "Scalable",
              subtitle:
                "Leverage the near-infinite scalability of the Livepeer Network, rivaling Amazon’s cloud compute.",
            },
            {
              title: "Reliable",
              subtitle:
                "An always-on, incentivized network and intelligent distribution guarantees transcoding never stops.",
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
