/** @jsx jsx */
import { jsx, Box, Container, Heading, Link as A } from "theme-ui"
import Divider from "components/primitives/divider"
import StatsGrid from "components/layouts/stats-grid"
import { StatProps } from "components/primitives/stat"
import Link from "next/link"

const stats: StatProps[] = [
  {
    title: "100+",
    label: "Github Contributors"
  },
  {
    title: "1k+",
    label: <>Stargazers</>,
    color: "gradient"
  },
  {
    title: "+100",
    label: <>Repos</>
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
          There are many opportunities for designers, software engineers and
          enthusiasts to contribute to the Livepeer ecosystem.
        </Heading>
        <Divider isTransparent isVertical size={["32px", "40px"]} />
        <Link href="/oss" passHref>
          <A variant="buttons.primary" href="/oss">
            Explore the code
          </A>
        </Link>
        <StatsGrid pushSx={{ mt: 5 }} stats={stats} />
      </Box>
    </Container>
  </Box>
)

export default IsOpenSourceSection
