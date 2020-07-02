import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"
import ParticipantsHero from "components/sections/participants/hero"
import JumpInSection from "components/sections/participants/jump-in"
import CommunitySection from "components/sections/home/community"
import HaveACallSection from "components/sections/participants/have-a-call"

const CodePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <ParticipantsHero />
      <JumpInSection />
      <CommunitySection title="Join the Livepeer Community" />
      <HaveACallSection />
    </Box>
    <Footer />
  </>
)

export default CodePage
