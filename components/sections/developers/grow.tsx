import { Container, Grid, Box, Heading, Text } from "theme-ui";
import BasicCard, { BasicCardProps } from "components/primitives/cards/basic";

const tools: BasicCardProps[] = [
  {
    title: "💸 Livepeer Grants Program",
    description:
      "The Livepeer Grants Program empowers independent builders and contributors with resources for experimentation.",
    linkProps: {
      link: {
        label: "github.com/livepeer/grants",
        href: "https://github.com/livepeer/grants",
        isExternal: true,
      },
    },
  },
  {
    title: "💳 Livepeer Streaming Credits Program",
    description:
      "Join the Livepeer Streaming Credits Program to help bring your idea to market, with up to $3000 in credits to offset your video infrastructure bill with Livepeer.",
    linkProps: {
      link: {
        label: "Apply",
        href: "https://livepeer.typeform.com/to/McJZ2nMI",
        isExternal: true,
      },
    },
  },
];

export const Build = () => (
  <Box sx={{ backgroundColor: "white" }} id="start-building">
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
          Grow
        </Heading>
        <Text sx={{ mb: 40, fontSize: 4 }}>
          Livepeer is a decentralized ecosystem that consists of many
          participants like non-profits, DAOs, and venture studios with grant
          and investment opportunities available for those building with and
          contributing to Livepeer.
          <br />
          <br />
          Thinking of building a project on Livepeer? Start building, reach out,
          and get funded!
        </Text>
      </Box>

      <Grid
        columns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
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
