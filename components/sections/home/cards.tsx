import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconCard, { IconCardProps } from "components/primitives/cards/icon"
import { FiUserCheck, FiCode, FiBriefcase } from "react-icons/fi"

//@ts-ignore
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const cards: IconCardProps[] = [
  {
    icon: <FiUserCheck />,
    title: "Participants",
    description:
      "The core of this open infrastructure is an open, blockchain based network, with 1000's of participants running video infrastructure to enable video streaming at scale.",
    linkProps: { link: { label: "/participants", href: "/participants" } }
  },
  {
    icon: <FiCode />,
    title: "Developers",
    description:
      "This open network is built on the open source Livepeer Media Server, which you can build upon in your own video applications whether you want to use the scalable Livepeer network.",
    linkProps: { link: { label: "/developers", href: "/developers" } }
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise",
    description:
      "Video platforms and applications can use this network to transcode live and on demand video at less than 10% of the cost of other solutions.",
    linkProps: { link: { label: "/enterprise", href: "/enterprise" } }
  }
]

const CardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current
      }
    })
    const items = sectionRef.current.querySelectorAll(".h-animate")
    const cards = sectionRef.current.querySelectorAll(".c-animate")

    //@ts-ignore
    const split = new SplitText(items, { type: "lines" })

    // Set overflow text
    tl.set([items], { overflow: "hidden" })
    tl.add(gsap.effects.sectionHide(sectionRef.current))
    //@ts-ignore
    tl.add(gsap.effects.textHide([split.lines]))
    //@ts-ignore
    tl.sectionEntrance(sectionRef.current)
    //@ts-ignore
    tl.textEntrance([split.lines])
    //@ts-ignore
    tl.elementsEntrance([cards])
  }, [])
  return (
    <SectionLayout
      titleLabel="Subtitle"
      title="Let Livepeer do your video's work"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      background="muted"
      ref={sectionRef}
      className="hide__section"
    >
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
          <IconCard key={`card-${card.title}`} {...card} />
        ))}
      </Grid>
    </SectionLayout>
  )
}

export default CardsSection
