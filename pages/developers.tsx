import PageLayout from "components/layouts/page";
import DevelopersHero from "components/sections/developers/hero";
import Build from "components/sections/developers/build";
import Grow from "components/sections/developers/grow";
import Resources from "components/sections/developers/resources";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Box } from "theme-ui";

const Developers = () => {
  const { t } = useTranslation(["developers"]);

  const headProps: HeadProps = {
    meta: {
      title: "Developers",
      description:
        "Guides, tutorials, and resources to help you get started building live and on-demand video experiences with Livepeer.",
      url: "https://livepeer.org/developers",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <PageLayout headProps={headProps} pushContentSx={{ bg: "text" }} isDark>
      <DevelopersHero
        title={t("page-developers-title")}
        subtitle={t("page-developers-intro")}
        background="dark"
      />
      <Build />
      <Box id="grow" sx={{ scrollPaddingTop: 100 }}>
        <Grow />
      </Box>
      <Resources />
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
