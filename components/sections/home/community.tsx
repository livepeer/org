import React, { useRef, useEffect } from "react"
import SectionLayout from "components/layouts/section"
import { Grid, Flex } from "theme-ui"
import IconLink, { IconLinkProps } from "components/primitives/links/icon"
import {
  FaDiscourse,
  FaDiscord,
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaMedium
} from "react-icons/fa"
import Divider from "components/primitives/divider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const links: IconLinkProps[] = [
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join Livepeer on&nbsp;<b>Discourse</b>
      </>
    ),
    href: "https://forum.livepeer.org/",
    isExternal: true
  },
  {
    icon: <FaDiscord />,
    label: (
      <>
        Join our&nbsp;<b>Discord Server</b>
      </>
    ),
    href: "https://discord.com/invite/RR4kFAh",
    isExternal: true
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
    href: "https://www.reddit.com/r/livepeer/",
    isExternal: true
  },
  {
    icon: <FaTelegram />,
    label: (
      <>
        Contact us on&nbsp;<b>Telegram</b>
      </>
    ),
    href: "https://t.me/livepeer",
    isExternal: true
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

const CommunitySection = ({ title = "Community" }) => {
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
      className="hide__section"
      ref={sectionRef}
      title={title}
      titleLabel="Subtitle"
      subtitle="Livepeer is an open project that believes in open source code and creative contribution from people with diverse interests and skill sets. Join us."
      pushSx={{ pt: "160px" }}
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
                <IconLink pushSx={{ width: "372px" }} {...link} />
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
            <IconLink
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
