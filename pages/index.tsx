import HomeHero from "components/sections/home/hero"
import ByTheNumbersSection from "components/sections/home/by-the-numbers"
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do"
import PrimerBanner from "components/sections/home/primer-banner"
import CommunitySection from "components/sections/home/community"
import PageLayout from "components/layouts/page"

const HomePage = () => (
  <PageLayout navProps={{ background: "muted", isFixed: true }}>
    <HomeHero />
    <LetLivepeerDoSection />
    <PrimerBanner />
    <ByTheNumbersSection />
    <CommunitySection />
  </PageLayout>
)

export default HomePage
