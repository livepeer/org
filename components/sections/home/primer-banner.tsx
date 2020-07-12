import React, { useRef, useEffect } from "react"
import { Container, Box, Text, Heading, Button } from "theme-ui"
import PrimerSvg from "components/svgs/primer"
import elementEffect from "lib/animations/section-effect"

const PrimerBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    elementEffect(sectionRef.current)
  }, [])

  return (
    <Box
      ref={sectionRef}
      sx={{ bg: "muted", px: 3, py: "80px" }}
    >
      <Container
        variant="section"
        sx={{
          bg: "text",
          color: "background",
          pt: [4, 5],
          px: [4, null, null, "96px"],
          pb: [7, null, null, 5],
          position: "relative",
          overflow: "hidden",
          borderRadius: "lg",
          boxShadow: "magical"
        }}
      >
        <Box
          sx={{
            maxWidth: "md",
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", null, null, "flex-start"],
            mx: ["auto", null, null, 0]
          }}
        >
          <Text
            variant="large"
            sx={{
              mb: 2,
              textAlign: ["center", null, null, "left"]
            }}
          >
            Primer
          </Text>
          <Heading
            variant="heading.3"
            sx={{
              textAlign: ["center", null, null, "left"],
              fontFamily: "body"
            }}
          >
            Curious about how it works?
          </Heading>
          <Text
            variant="normal"
            sx={{
              color: "lightGray",
              mt: "18px",
              mb: "40px",
              textAlign: ["center", null, null, "left"]
            }}
          >
            Through storytelling, illustration, and data, the Livepeer Primer
            explains, at a high level, the problem Livepeer solves and how it
            works.
          </Text>
          <Button sx={{ width: "fit-content" }}>Check it out</Button>
        </Box>
        <Box
          className="c--hide c-animate"
          sx={{
            position: "absolute",
            bottom: [-7, null, null, -5],
            right: ["50%", null, null, -6],
            transform: ["translateX(50%)", null, null, "none"]
          }}
        >
          <PrimerSvg />
        </Box>
      </Container>
    </Box>
  )
}

export default PrimerBanner
