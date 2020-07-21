import { Box, Container, Grid, Heading } from "theme-ui"
import NodesSvg from "components/svgs/nodes"
import BlockchainSvg from "components/svgs/blockchain"

const HowVideoMiningWorksSection = () => (
  <Box sx={{ bg: "text", position: "relative", zIndex: "general" }}>
    <Container variant="section" sx={{ py: ["80px", null, null, "160px"] }}>
      <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
        <Box>
          <Heading
            variant="heading.3"
            sx={{
              color: "background",
              textAlign: "left",
              fontFamily: "body",
              mb: "24px"
            }}
          >
            How video mining works
          </Heading>
          <Heading
            variant="heading.5"
            sx={{ color: "lightGray", textAlign: "left" }}
          >
            Run a node on the Livepeer network that advertises the price it will
            charge for video transcoding. Continue your cryptocurrency mining
            with your GPUs.
          </Heading>
        </Box>
        <NodesSvg />
      </Grid>
      <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
        <BlockchainSvg />
        <Heading
          variant="heading.5"
          sx={{
            color: "lightGray",
            textAlign: "left",
            gridRow: [1, null, "unset"]
          }}
        >
          When video encoding jobs come your way, the Livepeer node routes the
          tasks to your GPUs, and the encoding leverages a different part of the
          GPUs than the mining, so the mining can also continue with minimal
          hashrate loss. No opportunity cost!
        </Heading>
      </Grid>
    </Container>
  </Box>
)

export default HowVideoMiningWorksSection
