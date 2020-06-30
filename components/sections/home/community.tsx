import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import SectionLayout from "components/layouts/section"
import { Grid, Flex } from "theme-ui"

gsap.registerPlugin(ScrollTrigger, SplitText)

import IconLinkCard, {
  IconLinkProps
} from "components/primitives/cards/icon-link"
import {
  FaDiscourse,
  FaDiscord,
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaMedium
} from "react-icons/fa"
import { Divider } from "components/primitives/divider"

const links: IconLinkProps[] = [
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join Livepeer on&nbsp;<b>Discourse</b>
      </>
    ),
    href: "/"
  },
  {
    icon: <FaDiscord />,
    label: (
      <>
        Join our&nbsp;<b>Discord Server</b>
      </>
    ),
    href: "/"
  },
  {
    icon: <FaTwitter />,
    label: (
      <>
        twitter.com/<b>livepeer</b>
      </>
    ),
    href: "https://twitter.com/livepeer",
    isExternal: true
  },
  {
    icon: <FaReddit />,
    label: (
      <>
        Read our subreddits on&nbsp;<b>Reddit</b>
      </>
    ),
    href: ""
  },
  {
    icon: <FaTelegram />,
    label: (
      <>
        Contact us on&nbsp;<b>Telegram</b>
      </>
    ),
    href: ""
  },
  {
    icon: <FaMedium />,
    label: (
      <>
        medium.com/<b>livepeer</b>
      </>
    ),
    href: "https://medium.com/livepeer",
    isExternal: true
  }
]

const CommunitySection = () => {
  const section = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!section.current) {
      return
    }

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
      title="Community"
      titleLabel="Subtitle"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      pushSx={{ pt: "160px" }}
      className="hide__section"
      ref={section}
    >
      <Grid
        columns={"repeat(3, 372px)"}
        gap={[3, null, null, null, 0]}
        sx={{
          mx: "auto",
          justifyContent: "center",
          gridTemplateColumns: [
            "372px",
            null,
            null,
            null,
            ({ space }) => `372px calc(372px + 2 * ${space[3]}px) 372px`
          ]
        }}
      >
        {links.map((link, i) => {
          if (i === 1 || i === 4) {
            return (
              <Flex key={`icon-link-${link.href}`}>
                <Divider
                  isVertical
                  size="72px"
                  pushSx={{
                    mx: 3,
                    display: ["none", null, null, null, "block"]
                  }}
                />
                <IconLinkCard pushSx={{ width: "372px" }} {...link} />
                <Divider
                  isVertical
                  size="72px"
                  pushSx={{
                    mx: 3,
                    display: ["none", null, null, null, "block"]
                  }}
                />
              </Flex>
            )
          }
          return (
            <IconLinkCard
              key={`icon-link-${link.href}`}
              pushSx={{ width: "372px" }}
              {...link}
            />
          )
        })}
      </Grid>
    </SectionLayout>
  )
}

export default CommunitySection
