import { Container, Heading, Text, Button, Box } from "theme-ui"
import { Divider } from "components/primitives/divider"

const HeroHome = () => (
  <Container
    variant="section"
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Box sx={{ maxWidth: "4xl", mt: 5, mb: "40px" }}>
      <Heading variant="heading.1">
        The
        <Text as="span" variant="gradient">
          World's Open
        </Text>
        <br />
        Video Infrascructure
      </Heading>
      <Divider isTransparent isVertical />
      <Heading variant="section.subtitle">
        Livepeer supports live streaming, video on demand, and transcoding
        across video formats and protocols.
      </Heading>
    </Box>
    <Button>Get started</Button>
    <Box sx={{ bg: "ultraLightGray", height: "500px", width: "100%", my: 4 }} />
  </Container>
)

export default HeroHome
