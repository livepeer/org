import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"
import DevelopersHero from "components/sections/developers/hero"

const CodePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden", bg: "text" }}>
      <DevelopersHero />
    </Box>
    <Footer />
  </>
)

export default CodePage
