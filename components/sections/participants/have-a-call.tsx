import SectionLayout from "components/layouts/section"
import { Link as A, Box } from "theme-ui"
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

const HaveACallSection = ({ youtubeVideos }) => (
  <SectionLayout
    title="Join our call"
    subtitle={
      <>
        Every month, our community catches up with each other virtually. We hear
        about the latest updates from the core team and showcase what we’ve been
        working on. Calls happen on the second Thursday of each month @ 12pm
        EST.
        <br />
        Catch them live on{" "}
        <A
          variant="accent"
          target="_blank"
          rel="noopener noreferrer"
          href="https://livepeer.com/tv"
        >
          livepeer.com/tv
        </A>
      </>
    }
  >
    <KeenSliderGrid>
      {youtubeVideos.map((v) => (
        <ImageCard
          key={`have-a-call-image-card-${v.snippet.resourceId.videoId}`}
          title={
            <Box
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "85ch"
              }}
            >
              {v.snippet.title}
            </Box>
          }
          gradientEffect={true}
          image={{ src: v.snippet.thumbnails.high.url, alt: v.snippet.title }}
          footnote={new Date(v.snippet.publishedAt).toLocaleDateString(
            "en-US",
            { weekday: "long", year: "numeric", month: "long", day: "numeric" }
          )}
          linkProps={{
            link: {
              label: `youtu.be/${v.snippet.resourceId.videoId}`,
              href: `https://youtu.be/${v.snippet.resourceId.videoId}`,
              isExternal: true
            }
          }}
          isLink
        />
      ))}
    </KeenSliderGrid>
  </SectionLayout>
)

export default HaveACallSection
