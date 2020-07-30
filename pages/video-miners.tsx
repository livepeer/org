import PageLayout from "components/layouts/page"
import HowVideoMiningWorksSection from "components/sections/video-miners/how-video-mining-works"
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk"
import HowToGetStartedSection from "components/sections/video-miners/how-to-get-started"
import RequirementsSection from "components/sections/video-miners/requirements"
import VideoMinerHero from "components/sections/video-miners/hero"
import { getTotalGeneratedFees } from "lib/document-helpers"

const VideoMinerPage = ({ totalGeneratedFees }) => (
  <PageLayout>
    <VideoMinerHero />
    <HowVideoMiningWorksSection />
    <LetTheNumbersTalkSection totalGeneratedFees={totalGeneratedFees} />
    <RequirementsSection />
    <HowToGetStartedSection />
  </PageLayout>
)

export async function getStaticProps() {
  const totalGeneratedFees = await getTotalGeneratedFees()

  return {
    props: {
      totalGeneratedFees: totalGeneratedFees / 10e17
    },
    revalidate: 1
  }
}

export default VideoMinerPage
