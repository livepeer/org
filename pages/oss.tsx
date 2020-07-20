/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import OpenSourceSection from "components/sections/oss/open-source"
import GetInvolvedSection from "components/sections/oss/get-involved"
import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiHeart } from "react-icons/fi"

const CoverImage = () => (
  <figure
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      userSelect: "none"
    }}
  >
    <img
      sx={{ minWidth: "1440px", maxWidth: "1440px" }}
      src="/images/contributors.png"
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        minWidth: "1440px",
        maxWidth: "1440px",
        height: "270px",
        left: "50%",
        transform: "translateX(-50%)",
        background:
          "linear-gradient(90deg, #131418 18.82%, rgba(19, 20, 24, 0) 100%)"
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        minWidth: "1440px",
        maxWidth: "1440px",
        height: "270px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(19, 20, 24, 0.7)"
      }}
    />
  </figure>
)

const CodePage = () => (
  <PageLayout pushContentSx={{ bg: "text" }} isDark>
    <IconHero
      icon={<FiHeart />}
      title="Livepeer open source"
      subtitle="Open video infrastructure for an open web."
      illustration={<CoverImage />}
      background="dark"
      withAnimation
    />
    <OpenSourceSection />
    <GetInvolvedSection />
  </PageLayout>
)

export default CodePage
