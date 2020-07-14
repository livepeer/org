import React, { useRef, useEffect } from "react"
import { Container, Box, Text, Heading, Grid, Link as A } from "theme-ui"
import gsap from "gsap"
import ListItem, { ListItemProps } from "components/primitives/list-item"
import { FiCheckCircle } from "react-icons/fi"
import NetworkSvg from "components/svgs/network"
import { DURATION } from "lib/animations"

const listItems: ListItemProps[] = [
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  },
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  },
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  }
]

const PublicNetworkBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current
      }
    })
    tl.set(sectionRef.current, {
      autoAlpha: 0
    })
    // @ts-ignore
    tl.sectionEntrance(sectionRef.current, {
      delay: DURATION * 2
    })
  }, [sectionRef])
  return (
    <Box sx={{ bg: "muted", px: [0, null, null, 3], pt: "160px", pb: "80px" }}>
      <Container
        className="hide__section"
        ref={sectionRef}
        variant="section"
        sx={{
          bg: "text",
          color: "background",
          pt: ["164px", null, 5],
          pb: [4, 5],
          px: [4, null, null, "96px"],
          position: "relative",
          overflow: "hidden",
          borderRadius: [0, null, null, "lg"],
          boxShadow: "magical",
          zIndex: "general"
        }}
      >
        <Grid columns={[1, null, 2]} gap={4} sx={{ zIndex: "general" }}>
          <Box sx={{ zIndex: "general" }}>
            <Text
              variant="large"
              sx={{ mb: 2, textAlign: "left", zIndex: "general" }}
            >
              Build with
            </Text>
            <Heading
              variant="heading.3"
              sx={{ textAlign: "left", fontFamily: "body", zIndex: "general" }}
            >
              The Public Network
            </Heading>
          </Box>
          <Box>
            <Box>
              {listItems.map((item, i) => (
                <ListItem
                  key={`get-involved-link-${i}`}
                  className="list-item"
                  pushSx={{ mb: "40px" }}
                  gap={3}
                  {...item}
                />
              ))}
            </Box>
            <A
              variant="buttons.primary"
              href="https://livepeer.readthedocs.io/"
              target="_blank"
            >
              Read the docs
            </A>
          </Box>
        </Grid>
        <NetworkSvg
          pushSx={{
            position: "absolute",
            bottom: ["unset", null, "-136px"],
            left: ["-164px", null, "-104px"],
            top: ["-136px", null, "unset"]
          }}
        />
      </Container>
    </Box>
  )
}

export default PublicNetworkBanner
