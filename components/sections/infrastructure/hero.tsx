import { Container, Heading } from "theme-ui"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"

const InfrastructureHero = () => (
  <Container variant="section" sx={{ maxWidth: "712px", mb: "-200px" }}>
    <Heading variant="heading.1" sx={{ mb: 4 }}>
      Infrastructure Operators
    </Heading>
    <Heading variant="heading.5" sx={{ mb: 5 }}>
      Earn more by transcoding video on GPUs while mining
    </Heading>
    <IllustratedBackgroundBox
      pushSx={{ height: "500px" }}
      pushContentSx={{ p: 3 }}
    >
      To-do: code story
    </IllustratedBackgroundBox>
  </Container>
)

export default InfrastructureHero
