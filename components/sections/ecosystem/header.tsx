import { Box, Container, Heading, Text } from "theme-ui";

export const Header = () => {
  return (
    <Box sx={{ px: 3, py: ["40px", null, null, "80px"] }}>
      <Container
        variant="section"
        sx={{
          px: [null, null, null, "96px"],
          py: 0,
          position: "relative",
          overflow: "hidden",
        }}>
        <Box
          sx={{
            maxWidth: "5xl",
            mx: "auto",
            zIndex: "general",
            position: "relative",
            textAlign: "center",
          }}>
          <Heading
            sx={{
              variant: ["text.heading.2", "text.heading.1"],
              whiteSpace: "break-spaces",
              overflowWrap: "normal",
              display: ["block", null, null, null],
            }}>
            Livepeer&nbsp;
            <Text
              as="span"
              sx={{
                display: "inline-block",
                pr: ["2px", "4px"], // Fix text being clipped
                background: ({ colors }) =>
                  `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`,
                variant: "text.gradientBase",
              }}>
              Ecosystem
            </Text>
          </Heading>
          <Heading
            variant="section.subtitle"
            sx={{
              maxWidth: 700,
              color: "section.subtitle",
            }}
            mt={3}>
            Explore the apps and services of the Livepeer ecosystem, and
            discover the next generation of decentralized video.
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};
