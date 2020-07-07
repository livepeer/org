import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import GetTokenCard, { GetTokenCardProps } from "./card"
import {
  GetTokenSvg,
  StakeTokenSvg
} from "components/svgs/tokenholder-card-headers"

const cards: GetTokenCardProps[] = [
  {
    titleLabel: "Get",
    title: "Livepeer Token",
    listItems: [
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes.",
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes.",
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
    ],
    cta: { label: "Visit uniswap.exchange", onClick: () => {} },
    accent: "primary",
    headerIllustration: <StakeTokenSvg />
  },
  {
    titleLabel: "Stake",
    title: "Livepeer Token",
    listItems: [
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes.",
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes.",
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
    ],
    cta: { label: "Open Livepeer explorer", onClick: () => {} },
    accent: "secondary",
    headerIllustration: <GetTokenSvg />
  }
]

const GetTokenSection = () => (
  <SectionLayout
    title="Get token, then put it to work"
    subtitle="To become an infrastructure operator, you must have the following"
    background="muted"
    pushSx={{ py: ["80px", "160px"] }}
  >
    <Grid columns={[1, null, 2]}>
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
