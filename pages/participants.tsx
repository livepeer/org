import JumpInSection from "components/sections/participants/jump-in"
import CommunitySection from "components/sections/home/community"
import HaveACallSection from "components/sections/participants/have-a-call"
import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiUserCheck } from "react-icons/fi"
import ParticipantsSvg from "components/svgs/participants"

const ParticipantsPage = ({ youtubeVideos }) => {
  return (
    <PageLayout>
      <IconHero
        icon={<FiUserCheck />}
        title="Participants"
        subtitle={
          <>
            Join thousands of participants enabling video streaming at scale on
            the open, <br />
            blockchain-based network.
          </>
        }
        illustration={<ParticipantsSvg />}
        withAnimation
      />
      <JumpInSection />
      <CommunitySection title="Join the Livepeer Community" />
      <HaveACallSection youtubeVideos={youtubeVideos} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLkw6hm1fcjtEo9HydrGKP2R_NHhSu1Mpl&key=${process.env.YOUTUBE_API_KEY}`
  )
  const youtubeData = await response.json()
  return {
    props: {
      youtubeVideos: youtubeData.items
    },
    unstable_revalidate: 1
  }
}

export default ParticipantsPage
