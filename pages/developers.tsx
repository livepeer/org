import { Box } from "theme-ui"
import Head from "components/primitives/head"
import Nav from "components/sections/nav"
import Footer from "components/sections/footer"
import DevelopersHero from "components/sections/developers/hero"
import PublicNetworkBanner from "components/sections/developers/public-network-banner"

const CodePage = () => (
  <>
    <Head />
    <Nav />
    <Box sx={{ position: "relative", overflow: "hidden", bg: "text" }}>
      <DevelopersHero />
      <PublicNetworkBanner />
    </Box>
    <Footer />
  </>
)

export default CodePage
