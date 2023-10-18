/** @jsx jsx */
import { jsx, Container, Box, Text, Heading, Link as A } from "theme-ui";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const DemuxedBanner = ({ label, title, subtitle, ctaText }) => (
  <Box sx={{ px: 3, pt: 60, pb: 100, bg: "muted" }}>
    <Container
      variant="section"
      sx={{
        bg: "#A6ADEB",
        color: "black",
        pt: [4, 5],
        px: [4, null, null, "96px"],
        pb: [7, null, null, 5],
        position: "relative",
        overflow: "hidden",
        borderRadius: "lg",
        boxShadow: "magical",
      }}>
      <Box
        sx={{
          maxWidth: "md",
          display: "flex",
          flexDirection: "column",
          alignItems: ["center", null, null, "flex-start"],
          mx: ["auto", null, null, 0],
        }}>
        <Text
          variant="large"
          sx={{
            mb: 2,
            textAlign: ["center", null, null, "left"],
          }}>
          {label}
        </Text>
        <Heading
          variant="heading.3"
          sx={{
            textAlign: ["center", null, null, "left"],
            fontFamily: "body",
          }}>
          {title}
        </Heading>
        <Text
          variant="normal"
          sx={{
            color: "black",
            mt: "18px",
            mb: "40px",
            textAlign: ["center", null, null, "left"],
          }}>
          {subtitle}
        </Text>
        <Link href="https://livepeer.typeform.com/livepeerdemuxed" passHref>
          <A
            variant="buttons.primary"
            sx={{
              color: "white",
              background: "black",
            }}>
            {ctaText} <FiArrowUpRight />
          </A>
        </Link>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: [0, null, null, -60],
          right: ["100%", null, null, 30],
          width: [0, null, null, 440],
          "@media (max-width: 768px)": {
            right: "0%",
            width: "14em",
          },
        }}>
        <img alt="Livepeer Swag" src="/images/demuxed/swag.svg" />
      </Box>
    </Container>
  </Box>
);

export default DemuxedBanner;
