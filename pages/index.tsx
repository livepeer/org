import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/nav"
import HeroHome from "components/heroes/home"
import Footer from "components/footer"

const HomePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <HeroHome />
    </Box>
    <Footer />
  </>
)

export default HomePage
