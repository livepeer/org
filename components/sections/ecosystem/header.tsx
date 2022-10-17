import { Box, Container, Heading, Text } from "theme-ui";

export const Header = ({ hero }) => {
  const {
    hero_description,
    hero_eyebrow,
    hero_title_dark,
    hero_title_green,
  } = hero;
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
            {hero_title_dark}&nbsp;
            <Text
              as="span"
              sx={{
                display: "inline-block",
                pr: ["2px", "4px"], // Fix text being clipped
                background: ({ colors }) =>
                  `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`,
                variant: "text.gradientBase",
              }}>
              {hero_title_green}
            </Text>
          </Heading>
          <Heading
            variant="section.subtitle"
            sx={{
              maxWidth: 700,
              color: "section.subtitle",
            }}
            mt={3}>
            {hero_description}
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};
