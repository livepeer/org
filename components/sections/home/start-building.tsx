import { Container, Grid, Box, Heading, Text, Link as A } from "theme-ui";
import BasicCard, { BasicCardProps } from "components/primitives/cards/basic";
import { FiArrowUpRight } from "react-icons/fi";

const tools: BasicCardProps[] = [
  {
    title: "🎙️ Livepeer Studio",
    description:
      "Livepeer Studio is your dashboard for building onchain and open social video experiences with the Livepeer API.",
    linkProps: {
      link: {
        label: "livepeer.studio",
        href: "https://livepeer.studio",
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
        label: "/reference/livepeer-js",
        href: "https://livepeerjs.org",
        isExternal: true,
      },
    },
  },
  {
    title: "🌐  Livepeer API",
    description:
      "Checkout the Livepeer API reference docs and explore all the endpoints exposed on the open API.",
    linkProps: {
      link: {
        label: "/reference/api",
        href: "https://docs.livepeer.org/reference/api",
        isExternal: true,
      },
    },
  },
];

export const StartBuilding = () => (
  <Box id="start-building">
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
          Livepeer protocol contributors are continuously solving the most
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
