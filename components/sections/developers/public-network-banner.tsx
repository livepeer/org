import React, { useRef, useEffect } from "react"
import { Container, Box, Text, Heading, Grid, Link as A } from "theme-ui"
import ListItem, { ListItemProps } from "components/primitives/list-item"
import { FiCheckCircle } from "react-icons/fi"
import NetworkSvg from "components/svgs/network"
import sectionEffect from "lib/animations/section-effect"

const listItems: ListItemProps[] = [
  {
    icon: <FiCheckCircle />,
    children: (
      <Box>
        <Text
          sx={{
            color: "white",
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Decentralized
        </Text>
        No single company or individual controls the Livepeer network. Build
        video apps that connect directly with your audience in a first-hand
        manner, free from alterations, after-the-fact interpretation, and spin.
      </Box>
    )
  },
  {
    icon: <FiCheckCircle />,
    children: (
      <Box>
        <Text
          sx={{
            color: "white",
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Low Cost
        </Text>
        Crypto-economic incentive mechanisms create a network that's able to
        provide transcoding at an order of magnitude cheaper compared to cloud
        providers.
      </Box>
    )
  },
  {
    icon: <FiCheckCircle />,
    children: (
      <Box>
        <Text
          sx={{
            color: "white",
            textAlign: "left",
            lineHeight: 1,
            mb: 2
          }}
          variant="large"
        >
          Highly Scalable
        </Text>
        Scale to any size without a single point of failure, optimizing quality
        of encoding and performance of delivery.
      </Box>
    )
  }
]

const PublicNetworkBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    sectionEffect(sectionRef.current)
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
