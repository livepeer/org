/** @jsx jsx */
import { jsx, Box, Heading, Link as A, SxStyleProp, Grid } from "theme-ui"
import HowToGetStartedStep, { HowToGetStartedStepProps } from "./step"

const linkSx: SxStyleProp = {
  color: "secondary",
  fontWeight: 600
}

const steps: HowToGetStartedStepProps[] = [
  {
    children: (
      <>
        Read <A variant="accent">this tutorial</A>
      </>
    )
  },
  {
    children: (
      <>
        View the <A variant="accent">node operation docs</A> and the{" "}
        <A variant="accent">GPU scaling docs</A>.
      </>
    )
  },
  {
    children: (
      <>
        Reach out to the Livepeer team and community in the{" "}
        <A variant="accent">Discord chat room</A>, #transcoding channel. Initial
        testing and setup can require some DevOps, so we are happy to help.
      </>
    )
  },
  {
    children: (
      <>
        Review the <A variant="accent">node operation FAQ</A>.
      </>
    )
  }
]

const HowToGetStartedSection = () => (
  <Box>
    <Grid
      variant="layout.section"
      gap={5}
      columns={[1, null, 2]}
      sx={{ pt: ["80px", null, null, "160px"] }}
    >
      <Box>
        <Heading
          variant="section.title"
          sx={{ textAlign: ["center", null, "left"] }}
        >
          How to get started
        </Heading>
        <Heading
          variant="section.subtitle"
          sx={{ textAlign: ["center", null, "left"] }}
        >
          Become a video miner in four steps.
        </Heading>
      </Box>
      <Box
        sx={{
          ".list-item:not(:last-of-type)": {
            mb: 2
          }
        }}
      >
        {steps.map((s, i, { length }) => (
          <HowToGetStartedStep
            key={`how-to-get-started-step-${i}`}
            className="list-item"
            index={i}
            isLast={length === i + 1}
            {...s}
          />
        ))}
      </Box>
    </Grid>
  </Box>
)

export default HowToGetStartedSection
