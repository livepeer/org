import IsOpenSourceSection from "components/sections/developers/is-open-source"
import PageLayout from "components/layouts/page"
import DevelopersHero from "components/sections/developers/hero"
import HugeCardsSection from "components/sections/developers/huge-cards"

const CodePage = () => (
  <PageLayout pushContentSx={{ bg: "text" }}>
    <DevelopersHero />
    <HugeCardsSection />
    <IsOpenSourceSection />
  </PageLayout>
)

export default CodePage
