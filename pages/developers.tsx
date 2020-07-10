import PublicNetworkBanner from "components/sections/developers/public-network-banner"
import HostedApiSection from "components/sections/developers/hosted-api"
import IsOpenSourceSection from "components/sections/developers/is-open-source"
import PageLayout from "components/layouts/page"
import DevelopersHero from "components/sections/developers/hero"

const CodePage = () => (
  <PageLayout pushContentSx={{ bg: "text" }}>
    <DevelopersHero />
    <PublicNetworkBanner />
    <HostedApiSection />
    <IsOpenSourceSection />
  </PageLayout>
)

export default CodePage
