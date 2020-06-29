import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"
import HeroCode from "components/sections/heroes/code"
import OpenSourceSection from "components/sections/open-source"

const CodePage = () => (
  <>
    <Head />
    <Nav isDark />
    <Box sx={{ position: "relative", overflow: "hidden", bg: "text" }}>
      <HeroCode />
      <OpenSourceSection />
    </Box>
    <Footer isDark />
  </>
)

export default CodePage
