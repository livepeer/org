import { Box, Link as A, Grid, Heading, Text, SxStyleProp } from "theme-ui"
import LivepeerSvg from "components/svgs/livepeer"

const linkSx: SxStyleProp = {
  color: "primary",
  fontWeight: 600
}

const MissionSection = () => (
  <Box
    sx={{
      bg: "text",
      color: "background",
      overflow: "hidden"
    }}
  >
    <Grid
      variant="layout.section"
      columns={[1, null, 2]}
      gap={"40px"}
      sx={{
        py: ["80px", "160px"],
        maxWidth: "984px",
        position: "relative"
      }}
    >
      <LivepeerSvg
        pushSx={{
          position: "absolute",
          width: "unset",
          height: "760px",
          top: "-22px",
          filter: "opacity(0.3)",
          left: "-532px",
          transform: "rotate(90deg)",
          display: ["none", null, "block"]
        }}
      />
      <Box sx={{ zIndex: "general", position: "relative" }}>
        <Heading
          variant="heading.5"
          sx={{
            textAlign: ["center", null, "left"],
            color: "background",
            mb: 1
          }}
        >
          The Livepeer
        </Heading>
        <Heading
          variant="heading.2"
          sx={{ textAlign: ["center", null, "left"], mb: 3 }}
        >
          Mission
        </Heading>
        <Heading
          variant="heading.5"
          sx={{ textAlign: ["center", null, "left"], color: "lightGray" }}
        >
          The Livepeer Project’s mission is to build the world’s open video
          infrastructure.
        </Heading>
      </Box>
      <Box sx={{ zIndex: "general", position: "relative" }}>
        <Text variant="normal" sx={{ mb: 4 }}>
          Through the power of <A sx={linkSx}>open source software</A>, combined
          with the harnessing of underutilized resources like compute and
          bandwidth, combined with the use of crypto economic incentives for
          bootstrapping and participation, there is an opportunity to deliver an
          infrastructure that can{" "}
          <A sx={linkSx}>power video streaming applications</A> at a highly
          efficient price, and infinite scale.
        </Text>
        <Text variant="normal">
          Along with the proliferation of high quality cameras and ubiquitous
          bandwidth, the belief is that this will enable video applications to
          be created that were never before possible under traditional,
          centralized cost structures, which unlock communications, economic
          opportunity, and entertainment for society going forward.
        </Text>
      </Box>
    </Grid>
  </Box>
)

export default MissionSection
