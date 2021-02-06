import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiBook } from "react-icons/fi";
import ResourcesHeroSvg from "components/svgs/resources-hero";
import ResourcesDirectory from "components/sections/resources";
import { HeadProps } from "components/primitives/head";

const headProps: HeadProps = {
  meta: {
    title: "Resources",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/resources",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const ResourcesPage = () => (
  <PageLayout
    headProps={headProps}
    navProps={{ background: "muted" }}
    footerProps={{ prefooter: { type: "faqs" } }}>
    <IconHero
      icon={<FiBook />}
      title="Resources"
      subtitle="A directory of essential resources across the Livepeer ecosystem."
      illustration={<ResourcesHeroSvg />}
      background="muted"
      withAnimation
    />
    <ResourcesDirectory />
  </PageLayout>
);

export default ResourcesPage;
