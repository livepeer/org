import { Box, Link as A, Grid, Heading, Text, SxStyleProp } from "theme-ui"
import LivepeerIconSvg from "components/svgs/icons/livepeer"

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
      <LivepeerIconSvg
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
          The Livepeer.org
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
          The purpose of Livepeer.org is to be the best portal to Livepeer for
          its participants and users.
        </Heading>
      </Box>
      <Box sx={{ zIndex: "general", position: "relative" }}>
        <Text variant="normal" sx={{ mb: 4 }}>
          Through the power of open source software, combined with the
          harnessing of underutilized resources like compute and bandwidth,
          combined with the use of crypto economic incentives for bootstrapping
          and participation, there is an opportunity to deliver an
          infrastructure that can power video streaming applications at a highly
          efficient price, and infinite scale.
        </Text>
        <Text variant="normal" sx={{ mb: 4 }}>
          Along with the proliferation of high quality cameras and ubiquitous
          bandwidth, the belief is that this will enable video applications to
          be created that were never before possible under traditional,
          centralized cost structures, which unlock communications, economic
          opportunity, and entertainment for society going forward.
        </Text>
        <Text variant="normal">
          By providing the best possible portal to Livepeer, we hope to help
          capture this opportunity and fulfill the project’s mission as laid out
          in the original{" "}
          <A
            href="https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md"
            target="_blank"
            rel="noopener noreferrer"
            variant="coloured"
            data-dark
          >
            whitepaper
          </A>{" "}
          and{" "}
          <A
            href="https://github.com/livepeer/wiki/blob/master/GOVERNANCE-FOUNDERS-STATEMENT.md"
            target="_blank"
            rel="noopener noreferrer"
            variant="coloured"
            data-dark
          >
            founder’s statement
          </A>{" "}
          — to build the world’s open video infrastructure.
        </Text>
      </Box>
    </Grid>
  </Box>
)

export default MissionSection
