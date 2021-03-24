import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiBook } from "react-icons/fi";
import ResourcesHeroSvg from "components/svgs/resources-hero";
import ResourcesDirectory from "components/sections/resources";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const ResourcesPage = () => {
  const { t } = useTranslation(["resources"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-resources-meta-title"),
      description: t("page-resources-meta-description"),
      url: "https://livepeer.org/resources",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout
      headProps={headProps}
      navProps={{ background: "muted" }}
      footerProps={{ prefooter: { type: "faqs" } }}>
      <IconHero
        icon={<FiBook />}
        title={t("page-resources-title")}
        subtitle={t("page-resources-intro")}
        illustration={<ResourcesHeroSvg />}
        background="muted"
        withAnimation
      />
      <ResourcesDirectory />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "resources"])),
    },
    revalidate: 1,
  };
}

export default ResourcesPage;
