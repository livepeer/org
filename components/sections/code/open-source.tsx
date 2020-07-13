/** @jsx jsx */
import SectionLayout from "components/layouts/section"
import { jsx, Button, Link as A } from "theme-ui"
import StatusCard, { StatusCardProps } from "components/primitives/cards/status"
import Divider from "components/primitives/divider"
import KeenSliderGrid from "components/layouts/keen-slider-grid"
import { FiArrowUpRight } from "react-icons/fi"

const cards: StatusCardProps[] = [
  {
    title: "Livepeer Media Server",
    description:
      "A golang developer library to enable video ingest, transcoding, streaming, and many other video related features.",
    linkProps: {
      link: {
        label: "/lms",
        href: "https://github.com/livepeer/lpms",
        isExternal: true
      },
      status: "Go"
    },
    isClickable: true
  },
  {
    title: "Livepeer.js",
    description:
      "A suite of tools for Javascript developers to build video enabled applications, including SDKs for the Livepeer protocol, UI components, and more.",
    linkProps: {
      link: {
        label: "/livepeerjs",
        href: "https://github.com/livepeer/livepeerjs",
        isExternal: true
      },
      status: "JavaScript"
    },
    isClickable: true
  },
  {
    title: "Stream-tester",
    description:
      "Stream tester is a tool to measure performance and stability of Livepeer transcoding network",
    linkProps: {
      link: {
        label: "/stream-tester",
        href: "https://github.com/stream-tester",
        isExternal: true
      },
      status: "Go"
    },
    isClickable: true
  }
]

const OpenSourceSection = () => (
  <SectionLayout
    background="black"
    title="Explore the projects"
    subtitle="Livepeer is an open project that believes in open source code and creative contribution from people with diverse interests and skillsets. Hundreds of people have contributed ideas, code, designs, and time to Livepeer."
    pushSx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: "160px"
    }}
    headingContainerPushSx={{ mb: 4 }}
  >
    <A
      href="https://github.com/livepeer/"
      target="_blank"
      rel="noopener noreferrer"
      variant="buttons.primary"
      sx={{ display: "flex" }}
    >
      View All Projects{" "}
      <i sx={{ ml: 2, fontSize: 4 }}>
        <FiArrowUpRight />
      </i>
    </A>
    <Divider isVertical isTransparent size={["56px", "72px"]} />
    <KeenSliderGrid
      breakpoints={[
        { value: "320px", slidesPerView: 1 },
        { value: "664px", slidesPerView: 2 },
        { value: "1152px", slidesPerView: 3 }
      ]}
    >
      {cards.map((card) => (
        <StatusCard
          key={`card-${card.title}`}
          pushSx={{ height: ["300px", "342px"] }}
          isDark
          {...card}
        />
      ))}
    </KeenSliderGrid>
  </SectionLayout>
)

export default OpenSourceSection
