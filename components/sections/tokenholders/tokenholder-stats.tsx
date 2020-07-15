import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { Text } from "theme-ui"

const stats: StatProps[] = [
  {
    title: "14.5 M",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total LPT Staked
      </Text>
    )
  },
  {
    title: "12 ETH",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total Fees Paid Out"
      </Text>
    ),
    color: "gradient"
  },
  {
    title: "2640",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total Delegators
      </Text>
    )
  }
]

const TokenholderStatsSection = () => (
  <SectionLayout
    title="Tokenholder Stats"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    pushSx={{ pt: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default TokenholderStatsSection
