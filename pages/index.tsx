import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import HomeHero from "components/sections/home/hero"
import Footer from "components/sections/footer"
import ByTheNumbersSection from "components/sections/home/by-the-numbers"
import CarsSection from "components/sections/home/cards"
import PrimerBanner from "components/sections/home/primer-banner"
import CommunitySection from "components/sections/home/community"

const HomePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HomeHero />
      <CarsSection />
      <PrimerBanner />
      <ByTheNumbersSection />
      <CommunitySection />
    </Box>
    <Footer />
  </>
)

export default HomePage
