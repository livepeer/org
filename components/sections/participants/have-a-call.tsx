import SectionLayout from "components/layouts/section"
import { Link as A } from "theme-ui"
import ImageCard, { ImageCardProps } from "components/primitives/cards/image"
import KeenSliderGrid from "components/layouts/keen-slider-grid"

const cards: ImageCardProps[] = [
  {
    description: "Streamflow, GPU Transcoding, & Probabilistic Micropayments.",
    footnote: "Mar 12,2020",
    linkProps: {
      link: { href: "/streamflow-gpu", label: "/streamflow-gpu" }
    },
    image: { src: "/images/misc/coworking.png" }
  },
  {
    description:
      "Streamflow, GPU Transcoding, & Probabilistic Micropayments 2.",
    footnote: "Mar 12,2020",
    linkProps: {
      link: { href: "/streamflow-gpu", label: "/streamflow-gpu" }
    },
    image: { src: "/images/misc/ide.png" }
  },
  {
    description:
      "Streamflow, GPU Transcoding, & Probabilistic Micropayments 3.",
    footnote: "Mar 12,2020",
    linkProps: {
      link: { href: "/streamflow-gpu", label: "/streamflow-gpu" }
    },
    image: { src: "/images/misc/stocks.png" }
  },
  {
    description:
      "Streamflow, GPU Transcoding, & Probabilistic Micropayments 4.",
    footnote: "Mar 12,2020",
    linkProps: {
      link: { href: "/streamflow-gpu", label: "/streamflow-gpu" }
    },
    image: { src: "/images/misc/city.png" }
  }
]

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
        <A variant="coloured" target="_blank" href="https://livepeer.com/tv">
          livepeer.com/tv
        </A>
      </>
    }
  >
    <KeenSliderGrid>
      {cards.map((c) => (
        <ImageCard
          key={`have-a-call-image-card-${c.description}`}
          {...c}
          isLink
        />
      ))}
    </KeenSliderGrid>
  </SectionLayout>
)

export default HaveACallSection
