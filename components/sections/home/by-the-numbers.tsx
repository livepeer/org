<<<<<<< HEAD
import React, { useRef, useEffect } from "react"
import { Grid } from "theme-ui"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Stat, { StatProps } from "components/primitives/stat"
=======
import { StatProps } from "components/primitives/stat"
>>>>>>> master
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
// TODO replace this file

gsap.registerPlugin(ScrollTrigger, SplitText)

const stats: StatProps[] = [
  {
    title: "4.20.17",
    label: "Date founded"
  },
  {
    title: "42,201",
    label: "Total GPUs on the network",
    color: "gradient"
  },
  {
    title: "600k",
    label: "Current # of streams being transcoded"
  },
  {
    title: "0.01ms",
    label: "Avg. latency of transcoded renditions",
    color: "gradient"
  },
  {
    title: "15.5 ETH",
    label: "Infrastructure operator average earnings"
  },
  {
    title: "19.5 M",
    label: "Total LPT in circulation",
    color: "gradient"
  }
]

const ByTheNumbersSection = () => {
  const section = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!section.current) {
      return
    }
<<<<<<< HEAD

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current
      }
    })

    const items = section.current.querySelectorAll(".h-animate")
    const cards = section.current.querySelectorAll(".c-animate")

    const split = new SplitText(items, {
      type: "lines"
    })

    // Set overflow text
    tl.set([items], { overflow: "hidden" })
    tl.add(gsap.effects.sectionHide(section.current))
    tl.add(gsap.effects.textHide([split.lines]))
    //@ts-ignore
    tl.sectionEntrance(section.current)
    //@ts-ignore
    tl.textEntrance([split.lines])
    //@ts-ignore
    tl.elementsEntrance([cards])
  }, [])
  return (
    //@ts-ignore
    <SectionLayout
      background="muted"
      title="Livepeer by the numbers"
      subtitle={
        <>
          We’re proud of the numbers and worked hard to get here.
          <br />
          Celebrate with us.
        </>
      }
      titleLabel="Subtitle"
      pushSx={{ pb: "160px" }}
      className="hide__section"
      ref={section}
    >
      <Grid
        columns={[6, null, null, "repeat(3, fit-content(260px))"]}
        gap={["100px", null, null, "80px", "120px"]}
        sx={{
          justifyContent: ["flex-start", null, null, "center"],
          left: [-3, null, null, 0],
          mx: "auto",
          overflowX: "auto",
          overflowY: "hidden",
          position: "relative",
          px: [4, null, null, 0],
          width: ["100vw", null, null, "100%"]
        }}
      >
        {stats.map((stat) => (
          <Stat key={`stat-${stat.title}-${stat.label}`} {...stat} />
        ))}
      </Grid>
    </SectionLayout>
  )
}
=======
    titleLabel="Subtitle"
    pushSx={{ pb: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)
>>>>>>> master

export default ByTheNumbersSection
