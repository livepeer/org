import { Container, Grid, Box, Heading, Text } from "theme-ui";
import BasicCard, { BasicCardProps } from "components/primitives/cards/basic";

const tools: BasicCardProps[] = [
  {
    title: "🎙️ Livepeer Studio",
    description:
      "Your all-in-one dashboard for building, broadcasting, and publishing video on the open internet with Livepeer Protocol.",
    linkProps: {
      link: {
        label: "livepeer.studio",
        href: "https://docs.livepeer.org/guides/developing/quickstart",
        isExternal: true,
      },
    },
  },
  {
    title: "🧰  Livepeer.js",
    description:
      "Livepeer.js is a typescript SDK that provides a collection of React hooks and video components for easy interaction with the Livepeer API.",
    linkProps: {
      link: {
        label: "/livepeer-js",
        href: "https://livepeerjs.org",
        isExternal: true,
      },
    },
  },
  {
    title: "⏯️ Livepeer Player",
    description:
      "Livepeer Player is a developer-friendly open source solution for building custom video players.",
    linkProps: {
      link: {
        label: "/player",
        href: "https://docs.livepeer.org/reference/livepeer-js/Player",
        isExternal: true,
      },
    },
  },
];

export const StartBuilding = () => (
  <Box sx={{ backgroundColor: "muted" }} id="start-building">
    <Container variant="section" sx={{ pt: 100, pb: 60 }}>
      <Box sx={{ textAlign: "center" }}>
        <Text variant="section.titleLabel">Designed for developers</Text>
        <Heading
          variant="section.titleFade"
          sx={{
            lineHeight: 1,
            position: "relative",
          }}>
          A fully integrated suite of open-source developer tools
        </Heading>
        <Heading variant="section.subtitle" sx={{ mb: 5, maxWidth: 800 }}>
          Livepeer Protocol contributors are continuously solving the most
          challenging problems in video streaming and wrapping it all up in a
          thoughtfully designed, fully-integrated suite of developer tools and
          dashboards.
        </Heading>
      </Box>

      <Grid
        columns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[3]}
        sx={{
          mb: 4,
          mx: "auto",
          justifyContent: "center",
        }}>
        {tools.map((card) => (
          <BasicCard
            key={`card-${card.title}`}
            pushSx={{ maxWidth: "100%", height: ["300px"] }}
            {...card}
          />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default StartBuilding;
