import { Container, Grid, Box, Heading, Text, Link as A } from "theme-ui";
import BasicCard, { BasicCardProps } from "components/primitives/cards/basic";

const tools: BasicCardProps[] = [
  {
    title: "🎬 Quickstart",
    description: "Learn how to create an API key and start building!",
    linkProps: {
      link: {
        label: "Learn more",
        href: "https://docs.livepeer.org/guides/developing/quickstart",
        isExternal: true,
      },
    },
  },
  {
    title: "🔴 Create a livestream",
    description:
      "Learn how to create and watch a livestream in your application.",
    linkProps: {
      link: {
        label: "Learn more",
        href: "https://docs.livepeer.org/guides/developing/create-a-livestream",
        isExternal: true,
      },
    },
  },
  {
    title: "⏯️ Upload a video asset",
    description:
      "Learn how to upload and playback a video asset in your application.",
    linkProps: {
      link: {
        label: "Learn more",
        href:
          "https://docs.livepeer.org/guides/developing/upload-a-video-asset",
        isExternal: true,
      },
    },
  },
];

export const Build = () => (
  <Box sx={{ backgroundColor: "muted" }}>
    <Container variant="section" sx={{ pt: 100, pb: 60 }}>
      <Box sx={{ textAlign: "left" }}>
        <Heading
          sx={{
            textAlign: "left",
            lineHeight: 1,
            position: "relative",
            mb: 20,
            fontSize: 7,
            fontWeight: 700,
          }}>
          Build
        </Heading>
        <Text sx={{ mb: 20, fontSize: 4 }}>
          Step-by-step guides to start building with Livepeer.
        </Text>
        <A
          href="https://docs.livepeer.org"
          target="_blank"
          variant="neutral"
          sx={{
            display: "block",
            mb: 40,
            transition: ".2s",
            pl: 0,
            "&:hover": {
              transition: ".2s",
              pl: 1,
            },
          }}>
          View all guides →
        </A>
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

export default Build;
