import PageLayout from "components/layouts/page"
import HowVideoMiningWorksSection from "components/sections/video-miners/how-video-mining-works"
import LetTheNumbersTalkSection from "components/sections/video-miners/let-the-numbers-talk"
import HowToGetStartedSection from "components/sections/video-miners/how-to-get-started"
import RequirementsSection from "components/sections/video-miners/requirements"
import VideoMinerHero from "components/sections/video-miners/hero"
import { getTotalGeneratedFees } from "lib/document-helpers"
import { HeadProps } from "components/primitives/head"

const headProps: HeadProps = {
  meta: {
    title: "Livepeer - Video miners",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/video-miners",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg"
  }
}

const VideoMinerPage = ({ totalGeneratedFees }) => (
  <PageLayout headProps={headProps}>
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
