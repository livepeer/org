import { Container, Heading, Text, Button, Box } from "theme-ui"
import { Divider } from "components/primitives/divider"

const HeroHome = () => (
  <Container
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Box sx={{ maxWidth: "824px" }}>
      <Heading variant="heading.1">
        The
        <Text as="span" variant="gradient">
          World's Open
        </Text>
        <br />
        Video Infrascructure
      </Heading>
      <Divider isTransparent isVertical />
      <Heading variant="heading.5">
        Livepeer supports live streaming, video on demand, and transcoding
        across video formats and protocols.
      </Heading>
    </Box>
    <Divider isTransparent isVertical />
    <Button>Get started</Button>
  </Container>
)

export default HeroHome
