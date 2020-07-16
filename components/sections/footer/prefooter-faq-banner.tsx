import { Container, Heading, Text, Box, Link as A } from "theme-ui"
import PrefooterSvg from "components/svgs/prefooter"
import Link from "next/link"

const PrefooterFaqBanner = () => (
  <Box sx={{ px: 3, pt: [4, "80px"], pb: "80px", mb: [0, "80px"] }}>
    <Container
      sx={{
        bg: "text",
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
          display: "flex",
          flexDirection: "column",
          alignItems: ["center", null, null, "flex-start"],
          mx: ["auto", null, null, 0],
          zIndex: "general",
          position: "relative"
        }}
      >
        <Heading
          variant="heading.3"
          sx={{
            textAlign: ["center", null, null, "left"],
            color: "background",
            maxWidth: "xl"
          }}
        >
          Questions?
          <br />
          Check out the FAQ.
        </Heading>
        <Text
          variant="normal"
          sx={{
            mt: "18px",
            mb: "40px",
            textAlign: ["center", null, null, "left"],
            color: "lightGray",
            maxWidth: "md"
          }}
        >
          Discover the most frequently asked questions about participating in
          the Livepeer network as a tokenholder.
        </Text>
        <Link href="/faq?filter=tokenholders" passHref>
          <A variant="buttons.primary">Tokenholder FAQ</A>
        </Link>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "-336px",
          top: ["unset", null, null, "50%"],
          bottom: ["-232px", "-190px", null, "unset"],
          transform: ["none", null, null, "translateY(-50%)"]
        }}
      >
        <PrefooterSvg fill="primary" />
      </Box>
    </Container>
  </Box>
)

export default PrefooterFaqBanner
