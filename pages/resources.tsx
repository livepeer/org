import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiBook } from "react-icons/fi"
import ResourcesHeroSvg from "components/svgs/resources-hero"
import ResourcesDirectory from "components/sections/resources"

const ResourcesPage = () => (
  <PageLayout navProps={{ background: "muted" }}>
    <IconHero
      icon={<FiBook />}
      title="Resources"
      subtitle="A directory of essential resources across the Livepeer ecosystem."
      illustration={<ResourcesHeroSvg />}
      background="muted"
    />
    <ResourcesDirectory />
  </PageLayout>
)

export default ResourcesPage
