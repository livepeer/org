/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import OpenSourceSection from "components/sections/oss/open-source";
import GetInvolvedSection from "components/sections/oss/get-involved";
import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiHeart } from "react-icons/fi";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const CoverImage = () => (
  <figure
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      userSelect: "none",
    }}>
    <img
      sx={{ minWidth: "1440px", maxWidth: "1440px" }}
      src="/images/contributors.png"
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        minWidth: "1440px",
        maxWidth: "1440px",
        height: "270px",
        left: "50%",
        transform: "translateX(-50%)",
        background:
          "linear-gradient(90deg, #131418 18.82%, rgba(19, 20, 24, 0) 100%)",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        minWidth: "1440px",
        maxWidth: "1440px",
        height: "270px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(19, 20, 24, 0.7)",
      }}
    />
  </figure>
);

const CodePage = () => {
  const { t } = useTranslation(["oss"]);
  const headProps: HeadProps = {
    meta: {
      title: t("page-oss-meta-title"),
      description: t("page-oss-meta-description"),
      url: "https://livepeer.org/oss",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };
  return (
    <PageLayout headProps={headProps} pushContentSx={{ bg: "text" }} isDark>
      <IconHero
        icon={<FiHeart />}
        title={t("page-oss-title")}
        subtitle={t("page-oss-intro")}
        illustration={<CoverImage />}
        background="dark"
        withAnimation
      />
      <OpenSourceSection
        title={t("page-oss-featured")}
        subtitle={t("page-oss-featured-text")}
        ctaText={t("page-oss-featured-cta")}
        cards={[
          {
            title: t("page-oss-featured-go"),
            description: t("page-oss-featured-go-text"),
          },
          {
            title: t("page-oss-featured-protocol"),
            description: t("page-oss-featured-protocol-text"),
          },
          {
            title: t("page-oss-featured-media-server"),
            description: t("page-oss-featured-media-server-text"),
          },
        ]}
      />
      <GetInvolvedSection
        label={t("page-oss-collaborate")}
        title={t("page-oss-collaborate-title")}
        subtitle={t("page-oss-collaborate-intro")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "oss"])),
    },
    revalidate: 1,
  };
}

export default CodePage;
