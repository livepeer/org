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
    subtitle="The capacity on Livepeer's network represents access to 70,000+ GPUs, or enough to encode all the realtime video streaming through Twitch, Facebook, and Youtube combined."
    pushSx={{ py: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default LetTheNumbersTalkSection
