import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"

const CodePage = () => (
  <>
    <Head />
    <Nav isDark />
    <Box sx={{ position: "relative", overflow: "hidden" }}></Box>
    <Footer />
  </>
)

export default CodePage
