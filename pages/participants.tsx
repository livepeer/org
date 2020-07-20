import JumpInSection from "components/sections/participants/jump-in"
import CommunitySection from "components/sections/home/community"
import HaveACallSection from "components/sections/participants/have-a-call"
import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiUserCheck } from "react-icons/fi"
import ParticipantsSvg from "components/svgs/participants"

const ParticipantsPage = () => (
  <PageLayout>
    <IconHero
      icon={<FiUserCheck />}
      title="Participants"
      subtitle={
        <>
          Join thousands of participants enabling video streaming at scale on
          the open, <br />
          blockchain based network.
        </>
      }
      illustration={<ParticipantsSvg />}
      withAnimation
    />
    <JumpInSection />
    <CommunitySection title="Join the Livepeer Community" />
    <HaveACallSection />
  </PageLayout>
)

export default ParticipantsPage
