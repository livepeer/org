import HomeHero from "components/sections/home/hero"
import ByTheNumbersSection from "components/sections/home/by-the-numbers"
import CarsSection from "components/sections/home/cards"
import PrimerBanner from "components/sections/home/primer-banner"
import CommunitySection from "components/sections/home/community"
import PageLayout from "components/layouts/page"

const HomePage = () => (
  <PageLayout>
    <HomeHero />
    <CarsSection />
    <PrimerBanner />
    <ByTheNumbersSection />
    <CommunitySection />
  </PageLayout>
)

export default HomePage
