import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { Container, Heading, Text, Box, Flex, Input, Button } from "theme-ui"
import PrefooterSvg from "components/svgs/prefooter"
import initGsap from "lib/animations"
initGsap()

const PrefooterBanner = () => {
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
    <Box
      className="hide__section"
      ref={sectionRef}
      sx={{ px: 3, pt: [4, "80px"], pb: "80px", mb: ["-122px", "80px"] }}
    >
      <Container
        sx={{
          bg: "primary",
          py: [4, 5],
          px: [4, null, null, "96px"],
          position: "relative",
          overflow: "hidden",
          borderRadius: "lg",
          boxShadow: "magical"
        }}
      >
        <Box
          sx={{
            maxWidth: "lg",
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", null, null, "flex-start"],
            mx: ["auto", null, null, 0],
            zIndex: "general"
          }}
        >
          <Heading
            className="h-animate"
            variant="heading.3"
            sx={{ textAlign: ["center", null, null, "left"] }}
          >
            Ready to get started?
          </Heading>
          <Text
            className="h-animate"
            variant="normal"
            sx={{
              mt: "18px",
              mb: "40px",
              textAlign: ["center", null, null, "left"]
            }}
          >
            Through storytelling, illustration, and data, the Livepeer Primer
            explains, at a high level, the problem Livepeer solves and how it
            works.
          </Text>
          <Flex
            className="c-animate"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              mx: [-1, 0],
              zIndex: "general"
            }}
          >
            <Input
              placeholder="Enter your work email address"
              sx={{ mx: 1, flex: "1 1 60%", mb: 2 }}
            />
            <Button
              variant="neutral"
              sx={{ minWidth: "fit-content", flex: "1 1", mx: 1 }}
            >
              Check it out
            </Button>
          </Flex>
        </Box>
        <Box
          className="c-animate"
          sx={{
            position: "absolute",
            right: "-336px",
            top: ["unset", null, null, "50%"],
            bottom: ["-232px", "-190px", null, "unset"],
            transform: ["none", null, null, "translateY(-50%)"]
          }}
        >
          <PrefooterSvg />
        </Box>
      </Container>
    </Box>
  )
}

export default PrefooterBanner
