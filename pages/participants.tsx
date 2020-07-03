import ParticipantsHero from "components/sections/participants/hero"
import JumpInSection from "components/sections/participants/jump-in"
import CommunitySection from "components/sections/home/community"
import HaveACallSection from "components/sections/participants/have-a-call"
import PageLayout from "components/layouts/page"

const ParticipantsPage = () => (
  <PageLayout>
    <ParticipantsHero />
    <JumpInSection />
    <CommunitySection title="Join the Livepeer Community" />
    <HaveACallSection />
  </PageLayout>
)

export default ParticipantsPage
