/** @jsx jsx */
import { jsx, Container, Heading, Box, Grid } from "theme-ui"
import Divider from "components/primitives/divider"
import { FiPlay } from "react-icons/fi"

const DevelopersHero = () => (
  <Box sx={{ bg: "background" }}>
    <Container
      variant="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 0
      }}
    >
      <Grid variant="layout.section" gap={5} columns={[1, null, 2]} sx={{}}>
        <Box>
          <i
            sx={{
              width: 16,
              height: 16,
              borderRadius: "full",
              bg: "primary",
              color: "text",
              fontSize: 6,
              mb: 4,
              variant: "layout.flexCenter"
            }}
          >
            <FiPlay />
          </i>
          <Heading
            sx={{
              variant: ["text.heading.2", "text.heading.1"],
              textAlign: ["left", "left"]
            }}
          >
            Developers
          </Heading>
          <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
          <Heading variant="section.subtitle" sx={{ textAlign: "left" }}>
            Livepeer supports live streaming, video on demand, and transcoding
            across video formats and protocols.
          </Heading>
        </Box>
        <Box
          sx={{ maxWidth: "482px", height: "282px", bg: "ultraLightGray" }}
        />
      </Grid>
    </Container>
  </Box>
)

export default DevelopersHero
