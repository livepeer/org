/** @jsx jsx */
import { jsx, Box, Container, Heading, Grid } from "theme-ui"
import { FiUserCheck } from "react-icons/fi"
import Divider from "components/primitives/divider"
import ParticipantsSvg from "components/svgs/participants"

const ParticipantsHero = () => (
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
      <Grid
        variant="layout.section"
        gap={5}
        columns={[1, null, null, 2]}
        sx={{}}
      >
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
            <FiUserCheck />
          </i>
          <Heading
            sx={{
              variant: ["text.heading.2", "text.heading.1"],
              textAlign: ["left", "left"]
            }}
          >
            Participants
          </Heading>
          <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
          <Heading variant="section.subtitle" sx={{ textAlign: "left" }}>
            Join thousands of participants enabling video streaming at scale on
            the open, blockchain based network.
          </Heading>
        </Box>
        <ParticipantsSvg />
      </Grid>
    </Container>
  </Box>
)

export default ParticipantsHero
