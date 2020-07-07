import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"

const stats: StatProps[] = [
  {
    title: "45",
    label: "Total active infrastructure operators"
  },
  {
    title: "$0.30",
    label: "Avg. price/hour/stream being charged",
    color: "gradient"
  },
  {
    title: "Free",
    label: "Cost to activate your node"
  }
]

const LetTheNumbersTalkSection = () => (
  <SectionLayout
    title="Let the numbers talk"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    pushSx={{ py: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default LetTheNumbersTalkSection
