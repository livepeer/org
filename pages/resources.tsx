import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiBook } from "react-icons/fi"
import ResourcesHeroSvg from "components/svgs/resources-hero"
import ResourcesDirectory from "components/sections/resources"

const ResourcesPage = () => (
  <PageLayout
    navProps={{ background: "muted" }}
    footerProps={{ prefooter: { type: "faqs" } }}
  >
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
)

export default ResourcesPage
