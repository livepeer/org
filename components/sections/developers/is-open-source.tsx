/** @jsx jsx */
import { jsx, Box, Container, Heading, Link as A } from "theme-ui"
import Divider from "components/primitives/divider"
import StatsGrid from "components/layouts/stats-grid"
import { StatProps } from "components/primitives/stat"
import Link from "next/link"
import { Text } from "theme-ui"

const stats: StatProps[] = [
  {
    title: "4.20.17",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Date founded
      </Text>
    )
  },
  {
    title: "42,201",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total GPUs on the network
      </Text>
    ),
    color: "gradient"
  },
  {
    title: "600k",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Current # of streams being transcoded
      </Text>
    )
  }
]

const CoverImage = () => (
  <figure
    sx={{
      position: "absolute",
      top: 4,
      left: "50%",
      transform: "translateX(-50%)"
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
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
      }}
    />
  </figure>
)

const IsOpenSourceSection = () => (
  <Box sx={{ position: "relative", bg: "background" }}>
    <CoverImage />
    <Container
      variant="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "160px",
        pb: [0, null, null, 5]
      }}
    >
      <Box
        sx={{
          maxWidth: "2xl",
          mb: ["32px", "40px"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
          Livepeer is open source
        </Heading>
        <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
        <Heading variant="section.subtitle" sx={{ color: "lightGray" }}>
          Explore the code behind the Livepeer project. Sed ut perspiciatis unde
          omnis iste natus error sit voluptats accusantium.
        </Heading>
        <Divider isTransparent isVertical size={["32px", "40px"]} />
        <Link href="/code" passHref>
          <A variant="buttons.primary" href="/code">
            Explore the code
          </A>
        </Link>
        <StatsGrid pushSx={{ mt: 5 }} stats={stats} />
      </Box>
    </Container>
  </Box>
)

export default IsOpenSourceSection
