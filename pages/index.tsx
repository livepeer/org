import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/nav"
import HeroHome from "components/heroes/home"
import Footer from "components/footer"
import ByTheNumbersSection from "components/sections/by-the-numbers"
import CarsSection from "components/sections/cards"

const HomePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HeroHome />
      <CarsSection />
      <ByTheNumbersSection />
    </Box>
    <Footer />
  </>
)

export default HomePage
