import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import HeroHome from "components/sections/heroes/home"
import Footer from "components/sections/footer"
import ByTheNumbersSection from "components/sections/by-the-numbers"
import CarsSection from "components/sections/cards"
import PrimerBanner from "components/sections/primer-banner"

const HomePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HeroHome />
      <CarsSection />
      <PrimerBanner />
      <ByTheNumbersSection />
    </Box>
    <Footer />
  </>
)

export default HomePage
