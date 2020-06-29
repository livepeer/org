import SectionLayout from "components/layouts/section"
import { Button, Grid } from "theme-ui"
import LinkCard, { LinkCardProps } from "components/primitives/cards/link"

const cards: LinkCardProps[] = []

const OpenSourceSection = () => (
  <SectionLayout
    background="black"
    title="Open source projects by us"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  >
    <Button>View all</Button>
    <Grid
      gap={4}
      sx={{
        gridTemplateColumns: [
          "sm",
          null,
          null,
          null,
          ({ sizes: { sm } }) => `repeat(3, ${sm})`
        ],
        mx: "auto",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {cards.map((card) => (
        <LinkCard key={`card-${card.title}`} {...card} />
      ))}
    </Grid>
  </SectionLayout>
)

export default OpenSourceSection
