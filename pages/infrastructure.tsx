import PageLayout from "components/layouts/page"
import HowVideoMiningWorksSection from "components/sections/infrastructure/how-video-mining-works"
import LetTheNumbersTalkSection from "components/sections/infrastructure/let-the-numbers-talk"
import HowToGetStartedSection from "components/sections/infrastructure/how-to-get-started"
import RequirementsSection from "components/sections/infrastructure/requirements"
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"

const InfrastructurePage = () => (
  <PageLayout>
    <CroppedIllustrationHero
      title="Infrastructure Operators"
      subtitle="Earn more by transcoding video on GPUs while mining"
      illustration={
        <IllustratedBackgroundBox pushContentSx={{ p: 3, height: "500px" }}>
          To-do: code story
        </IllustratedBackgroundBox>
      }
    />
    <HowVideoMiningWorksSection />
    <LetTheNumbersTalkSection />
    <RequirementsSection />
    <HowToGetStartedSection />
  </PageLayout>
)

export default InfrastructurePage
