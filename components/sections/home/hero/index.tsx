/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Link as A } from "theme-ui"
import Divider from "components/primitives/divider"

const HomeHero = () => (
  <Box sx={{ bg: "muted", position: "relative" }}>
    <Container
      variant="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "visible",
        pt: 5,
        bg: "muted"
      }}
    >
      <Box
        sx={{
          maxWidth: "5xl",
          mb: ["32px", "40px"],
          filter: "invert(1)",
          mixBlendMode: "difference",
          zIndex: "general",
          position: "relative"
        }}
      >
        <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
          The&nbsp;
          <Text
            as="span"
            sx={{
              pr: ["2px", "4px"], // Fix text being clipped
              background: ({ colors }) =>
                `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`,
              variant: "text.gradientBase"
            }}
          >
            World's
          </Text>{" "}
          <Text
            as="span"
            sx={{
              background: ({ colors }) =>
                `linear-gradient(90deg, ${colors.gradient.mid} 0%, #4CF1AC 100%)`,
              variant: "text.gradientBase"
            }}
          >
            Open&nbsp;
          </Text>
          <br sx={{ display: ["none", null, "block"] }} />
          Video Infrastructure
        </Heading>
        <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
        <Heading variant="section.subtitle">
          Livepeer is a decentralized video streaming network secured by the
          Ethereum blockchain
        </Heading>
      </Box>
      <A
        variant="buttons.primary"
        href="/#get-started"
        sx={{
          zIndex: "general",
          position: "relative"
        }}
      >
        Get started
      </A>
    </Container>
  </Box>
)

export default HomeHero
