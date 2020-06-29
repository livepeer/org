/** @jsx jsx */
import { jsx, Container, Heading, Box } from "theme-ui"
import Divider from "components/primitives/divider"
import HeartSvg from "components/icons/heart"

const CodeHero = () => (
  <Box sx={{ color: "background", bg: "text", position: "relative" }}>
    <img
      sx={{
        position: "absolute",
        top: 4,
        minWidth: "1440px",
        maxWidth: "1440px",
        left: "50%",
        transform: "translateX(-50%)",
        bg: "text",
        opacity: 0.2
      }}
      src="/images/contributors.png"
    />
    <Container
      variant="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "120px"
      }}
    >
      <Box
        sx={{
          maxWidth: "2xl",
          mb: ["32px", "40px"]
        }}
      >
        <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
          Livepeer <HeartSvg pushSx={{ width: ["35px", "62px"] }} />
          <br />
          open source
        </Heading>
        <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
        <Heading variant="section.subtitle" sx={{ color: "lightGray" }}>
          We believe in open components for an open video infrastructure and an
          open web.
        </Heading>
      </Box>
    </Container>
  </Box>
)

export default CodeHero
