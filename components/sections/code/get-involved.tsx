import { Box, Container, Text, Heading } from "theme-ui"

const GetInvolvedSection = () => (
  <Box sx={{ bg: "text", color: "background" }}>
    <Container variant="section" sx={{}}>
      <Text variant="section.titleLabel">Collaborate</Text>
      <Heading variant="section.title" sx={{}}>
        Get involved
      </Heading>
      <Heading variant="section.subtitle" sx={{}}>
        There are many opportunities to collaborate with others in the Livepeer
        ecosystem on code both on the video side, and on the blockchain side.
      </Heading>
    </Container>
  </Box>
)

export default GetInvolvedSection
