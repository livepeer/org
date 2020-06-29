import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"
import CodeHero from "components/sections/code/hero"
import OpenSourceSection from "components/sections/open-source"

const CodePage = () => (
  <>
    <Head />
    <Nav isDark />
    <Box sx={{ position: "relative", overflow: "hidden", bg: "text" }}>
      <CodeHero />
      <OpenSourceSection />
    </Box>
    <Footer isDark />
  </>
)

export default CodePage
