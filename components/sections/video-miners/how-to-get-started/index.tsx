/** @jsx jsx */
import { jsx, Box, Heading, Link as A, Grid } from "theme-ui"
import HowToGetStartedStep, { HowToGetStartedStepProps } from "./step"

const steps: HowToGetStartedStepProps[] = [
  {
    children: (
      <>
        <A
          variant="accent"
          href="https://livepeer.readthedocs.io/en/latest/transcoding.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the docs
        </A>{" "}
        for transcoding on the livepeer network
      </>
    )
  },
  {
    children: (
      <>
        Check out the{" "}
        <A
          variant="accent"
          href="https://livepeer.basement.studio/faq?filter=video-miners"
          target="_blank"
          rel="noopener noreferrer"
        >
          video miner FAQ{" "}
        </A>
      </>
    )
  },
  {
    children: (
      <>
        Reach out to the Livepeer team and community in the{" "}
        <A
          variant="accent"
          href="https://discord.com/invite/RR4kFAh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord chat room
        </A>
        , #transcoding channel. Initial testing and setup can require some
        DevOps, so we are happy to help.
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
          Become a video miner in three steps.
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
