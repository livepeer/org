import SectionLayout from "components/layouts/section"
import RequirementCard, { RequirementCardProps } from "./card"
import { FiSettings, FiZap, FiClock } from "react-icons/fi"
import { Grid } from "theme-ui"

const cards: RequirementCardProps[] = [
  {
    title: "Datacenter based GPUs with video encoding chips",
    description: "See our support matrix and community discussion",
    icon: <FiSettings />
  },
  {
    title: (
      <>
        Access to affordable
        <br />
        bandwith
      </>
    ),
    description: "With good connectivity to major internet service providers",
    icon: <FiZap />
  },
  {
    title: "Ability to run a blockchain aware Livepeer node 24/7",
    description:
      "If not interested in this piece, look at partnering with an existing node operator",
    icon: <FiClock />
  }
]

const RequirementsSection = () => (
  <SectionLayout
    title="Requirements"
    background="dark"
    subtitle="To become a video miner you must have the following:"
    pushSx={{ py: ["80px", null, null, "160px"] }}
  >
    <Grid
      columns={["minmax(auto, 360px)", null, null, 3]}
      gap="40px"
      sx={{ justifyContent: "center" }}
    >
      {cards.map((c) => (
        <RequirementCard key={`requirement-card-${c.title}`} {...c} />
      ))}
    </Grid>
  </SectionLayout>
)

export default RequirementsSection
