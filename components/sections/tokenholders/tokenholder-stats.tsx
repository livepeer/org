import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { nFormatter } from "lib/document-helpers"

type Props = {
  totalActiveStake: number
  totalDelegators: number
  totalGeneratedFees: number
}

const TokenholderStatsSection = ({
  totalActiveStake,
  totalDelegators,
  totalGeneratedFees
}: Props) => {
  const stats: StatProps[] = [
    {
      title: `${nFormatter(totalActiveStake, 1)}`,
      label: <>Total LPT Staked</>
    },
    {
      title: `${nFormatter(totalGeneratedFees, 1)} ETH`,
      label: <>Total Fees Paid Out</>,
      color: "gradient"
    },
    {
      title: totalDelegators.toString(),
      label: <>Total Delegators</>
    }
  ]

  return (
    <SectionLayout
      title="Tokenholder Stats"
      pushSx={{ pt: ["80px", null, null, "160px"] }}
    >
      <StatsGrid stats={stats} />
    </SectionLayout>
  )
}

export default TokenholderStatsSection
