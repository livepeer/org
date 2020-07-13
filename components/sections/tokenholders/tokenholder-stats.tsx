import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"

const stats: StatProps[] = [
  {
    title: "14.5 M",
    label: "Total LPT Staked"
  },
  {
    title: "12 ETH",
    label: "Total Fees Paid Out",
    color: "gradient"
  },
  {
    title: "2640",
    label: "Total Delegators"
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
