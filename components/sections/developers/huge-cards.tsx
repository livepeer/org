/** @jsx jsx */
import { jsx, Grid, Text, Box } from "theme-ui"
import SectionLayout from "components/layouts/section"
import HugeCard, { HugeCardProps } from "components/primitives/cards/huge"
import NetworkSvg from "components/svgs/network"
import HostedApiSvg from "components/svgs/hosted-api"

const cards: HugeCardProps[] = [
  {
    titleLabel: "Build with",
    title: "The Public Network",
    listItems: [
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Decentralized
        </Text>
        No single company or individual controls the Livepeer network. Build
        video apps that connect directly with your audience.
      </Box>,
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Low Cost
        </Text>
        Crypto payments for transcoding at the lowest possible cost.
      </Box>,
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Flexible
        </Text>
        Flexibility and control of using an OSS stack.
      </Box>
    ],
    cta: {
      label: "Read the docs",
      isLink: true,
      isExternal: true,
      href: "https://livepeer.readthedocs.io/"
    },
    accent: "primary",
    headerIllustration: <NetworkSvg />
  },
  {
    titleLabel: "Build with",
    title: (
      <>
        A Hosted
        <br sx={{ display: ["none", "initial"] }} /> Service
      </>
    ),
    listItems: [
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Easy to use
        </Text>
        Straight forward API’s without the complexities of crypto or blockchain.
      </Box>,
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Powered by the Public Network
        </Text>
        Affordable transcoding powered by the public network allows you to operate a
        UGC platform with millions of content creators.
      </Box>,
      <Box>
        <Text
          sx={{
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Smart Video
        </Text>
        Content moderation APIs necessary in running UGC platforms, such as automatically flagging
        adult content.
      </Box>
    ],
    cta: {
      label: "Visit livepeer.com",
      isLink: true,
      isExternal: true,
      href: "https://livepeer.com"
    },
    accent: "secondary",
    headerIllustration: <HostedApiSvg pushSx={{ minWidth: "968px" }} />
  }
]

const HugeCardsSection = () => (
  <SectionLayout
    background="muted"
    pushSx={{ py: ["80px", "160px"] }}
    headingContainerPushSx={{ mb: 0 }}
  >
    <Grid
      columns={["minmax(auto, 632px)", null, "repeat(2, minmax(auto, 632px))"]}
      sx={{ justifyContent: "center" }}
    >
      {cards.map((c) => (
        <HugeCard key={`get-token-card-${c.titleLabel}=${c.title}`} {...c} />
      ))}
    </Grid>
  </SectionLayout>
)

export default HugeCardsSection
