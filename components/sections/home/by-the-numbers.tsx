import React, { useRef, useEffect } from "react"
import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

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
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current
      },
      onComplete: () => {
        split.revert()
      }
    })
    tl.set(sectionRef.current, {
      autoAlpha: 0
    })

    const items = sectionRef.current.querySelectorAll(".h-animate")
    const elements = sectionRef.current.querySelectorAll(".c-animate")

    //@ts-ignore
    const split = new SplitText(items, { type: "lines" })

    // Set overflow text
    tl.set([items], { overflow: "hidden" })
    tl.add(gsap.effects.sectionHide(sectionRef.current))

    tl.add(gsap.effects.textHide([split.lines]))
    //@ts-ignore
    tl.sectionEntrance(sectionRef.current)
    //@ts-ignore
    tl.textEntrance([split.lines])
    //@ts-ignore
    tl.elementsEntrance([elements])
  }, [])
  return (
    <SectionLayout
      background="muted"
      className="hide__section"
      ref={sectionRef}
      title="Livepeer by the numbers"
      subtitle={
        <>
          We’re proud of the numbers and worked hard to get here.
          <br />
          Celebrate with us.
        </>
      }
      titleLabel="Subtitle"
      pushSx={{ pb: ["80px", null, null, "160px"] }}
    >
      <StatsGrid stats={stats} />
    </SectionLayout>
  )
}

export default ByTheNumbersSection
