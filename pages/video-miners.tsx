import PageLayout from "components/layouts/page"
import HowVideoMiningWorksSection from "components/sections/video-miners/how-video-mining-works"
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk"
import HowToGetStartedSection from "components/sections/video-miners/how-to-get-started"
import RequirementsSection from "components/sections/video-miners/requirements"
import VideoMinerHero from "components/sections/video-miners/hero"

const VideoMinerPage = () => (
  <PageLayout>
    <VideoMinerHero />
    <HowVideoMiningWorksSection />
    <LetTheNumbersTalkSection />
    <RequirementsSection />
    <HowToGetStartedSection />
  </PageLayout>
)

export default VideoMinerPage
