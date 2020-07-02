import SectionLayout from "components/layouts/section"
import { Link as A } from "theme-ui"

const HaveACallSection = () => (
  <SectionLayout
    title="Let's have a call"
    subtitle={
      <>
        Every month, our community catches up with each other virtually. We hear
        about the latest updates from the core team and showcase what we’ve been
        working on. Calls happen on the second Thursday of each month @ 12pm
        EST.
        <br />
        Catch them live on{" "}
        <A target="_blank" href="https://livepeer.com/tv">
          livepeer.com/tv
        </A>
      </>
    }
  >
    Content
  </SectionLayout>
)

export default HaveACallSection
