import PageLayout from "components/layouts/page"
import InfrastructureHero from "components/sections/infrastructure/hero"
import HowVideoMiningWorksSection from "components/sections/infrastructure/how-video-mining-works"
import LetTheNumbersTalkSection from "components/sections/infrastructure/let-the-numbers-talk"
import HowToGetStartedSection from "components/sections/infrastructure/how-to-get-started"
import RequirementsSection from "components/sections/infrastructure/requirements"

const InfrastructurePage = () => (
  <PageLayout>
    <InfrastructureHero />
    <HowVideoMiningWorksSection />
    <LetTheNumbersTalkSection />
    <RequirementsSection />
    <HowToGetStartedSection />
  </PageLayout>
)

export default InfrastructurePage
