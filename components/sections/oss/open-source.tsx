/** @jsx jsx */
import SectionLayout from "components/layouts/section"
import { jsx, Link as A } from "theme-ui"
import StatusCard, { StatusCardProps } from "components/primitives/cards/status"
import Divider from "components/primitives/divider"
import KeenSliderGrid from "components/layouts/keen-slider-grid"
import { FiArrowUpRight } from "react-icons/fi"

const cards: StatusCardProps[] = [
  {
    title: "Go Livepeer",
    description: "Official Go implementation of the Livepeer protocol",
    linkProps: {
      link: {
        label: "/go-livepeer",
        href: "https://github.com/livepeer/go-livepeer",
        isExternal: true
      },
      status: "Go"
    },
    isClickable: true
  },
  {
    title: "Protocol",
    description: "Ethereum smart contracts used for the Livepeer protocol.",
    linkProps: {
      link: {
        label: "/protocol",
        href: "https://github.com/livepeer/protocol",
        isExternal: true
      },
      status: "Solidity"
    },
    isClickable: true
  },
  {
    title: "Livepeer Media Server",
    description:
      "A golang developer library to enable video ingest, transcoding, streaming, and many other video related features.",
    linkProps: {
      link: {
        label: "/lpms",
        href: "https://github.com/livepeer/lpms",
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
    title="Featured Open Source projects"
    subtitle="Technologies used in Livepeer’s open source software include Golang, Solidity, Typescript, open source video tools like ffmpeg, and smart contract platforms like Ethereum."
    pushSx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: "160px"
    }}
    headingContainerPushSx={{ mb: 4 }}
    withAnimation
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
