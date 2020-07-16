import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import GetTokenCard, { GetTokenCardProps } from "./card"
import {
  GetTokenSvg,
  StakeTokenSvg
} from "components/svgs/tokenholder-card-headers"
import Router from "next/router"

const cards: GetTokenCardProps[] = [
  {
    titleLabel: "Get",
    title: "Livepeer Token",
    listItems: [
      "ERC-20-compatible token available on a number of non-custodial and custodial exchanges",
      "Originally distributed via a “Merkle Mine”, an algorithm for decentralized distribution of token during the genesis state",
      "Inflationary  according to algorithmically programmed issuance over time"
    ],
    cta: {
      label: "Exchange on Uniswap",
      onClick: () => {
        window.open(
          "https://app.uniswap.org/#/swap?outputCurrency=0x58b6a8a3302369daec383334672404ee733ab239"
        )
      }
    },
    accent: "primary",
    headerIllustration: <StakeTokenSvg />
  },
  {
    titleLabel: "Stake",
    title: "Livepeer Token",
    listItems: [
      "Earns you the right to perform or delegate work on the Livepeer network and vote on protocol proposals",
      "Routes work through the network in proportion to the amount of staked and delegated token, serving as a coordination mechanism",
      "Secures the network against a number of attacks via slashing that occurs due to protocol violation"
    ],
    cta: {
      label: "Open Livepeer explorer",
      onClick: () => {
        window.open("https://explorer.livepeer.org")
      }
    },
    accent: "secondary",
    headerIllustration: <GetTokenSvg />
  }
]

const GetTokenSection = () => (
  <SectionLayout
    title="Get token, then put it to work"
    background="muted"
    pushSx={{ py: ["80px", "160px"] }}
  >
    <Grid
      columns={["minmax(auto, 632px)", null, "repeat(2, minmax(auto, 632px))"]}
      sx={{ justifyContent: "center" }}
    >
      {cards.map((c) => (
        <GetTokenCard
          key={`get-token-card-${c.titleLabel}=${c.title}`}
          {...c}
        />
      ))}
    </Grid>
  </SectionLayout>
)

export default GetTokenSection
