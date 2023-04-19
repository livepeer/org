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

const guides: BasicCardProps[] = [
  {
    title: "🎬  Quickstart",
    description:
      "Learn how to create an API key inside Livepeer Studio and start building!",
    linkProps: {
      link: {
        label: "/quickstart",
        href: "https://docs.livepeer.org/guides/developing/quickstart",
        isExternal: true,
      },
    },
  },
  {
    title: "📼 ️ Upload a video",
    description:
      "Learn how to upload a video and play it back in your application with Livepeer.js.",
    linkProps: {
      link: {
        label: "/upload-a-video-asset",
        href:
          "https://docs.livepeer.org/guides/developing/upload-a-video-asset",
        isExternal: true,
      },
    },
  },
  {
    title: "🔴  Create a livestream",
    description:
      "Learn how to create a livestream and play it back in your application with Livepeer.js.",
    linkProps: {
      link: {
        label: "/create-a-livestream",
        href: "https://docs.livepeer.org/guides/developing/create-a-livestream",
        isExternal: true,
      },
    },
  },
  {
    title: "▶️  Playback On Demand Video",
    description:
      "Learn how to playback videos off of storage protocols IPFS and Arweave instantly with zero buffering using Livepeer.js.",
    linkProps: {
      link: {
        label: "/dstorage-playback",
        href: "https://docs.livepeer.org/guides/developing/dstorage-playback",
        isExternal: true,
      },
    },
  },
  {
    title: "🔐 ️ Add access control",
    description:
      "Learn how to gate on-demand video assets with wallet or NFT based access controls using Livepeer.js.",
    linkProps: {
      link: {
        label: "/access-control-vod",
        href: "https://docs.livepeer.org/guides/developing/access-control-vod",
        isExternal: true,
      },
    },
  },
  {
    title: "⛓️ Mint a video NFT",
    description: "Learn how to take videos onchain with Livepeer.js.",
    linkProps: {
      link: {
        label: "/mint-a-video-nft",
        href: "https://docs.livepeer.org/guides/developing/mint-a-video-nft",
        isExternal: true,
      },
    },
  },
];

export const StartBuilding = () => (
  <Box sx={{ backgroundColor: "muted" }} id="start-building">
    <Container variant="section">
      <Box sx={{ textAlign: "center" }}>
        <Text variant="section.titleLabel">Start Building</Text>
        <Heading
          variant="section.titleFade"
          sx={{
            lineHeight: 1,
            position: "relative",
          }}>
          Superpowers for video developers
        </Heading>
        <Heading variant="section.subtitle" sx={{ mb: 4, maxWidth: 800 }}>
          Build with an open video API that gives creators independence from
          platforms and developers the freedom to build. Explore guides, API
          documentation, a Typescript SDK, and fully open source code.
        </Heading>
        <A
          variant="buttons.neutral"
          href="https://docs.livepeer.org"
          target="_blank"
          sx={{ mb: 6 }}>
          Read the docs
          <i sx={{ ml: 1, fontSize: 4 }}>
            <FiArrowUpRight />
          </i>
        </A>
      </Box>

      <Text
        sx={{
          maxWidth: 580,
          mx: "auto",
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          letterSpacing: "-1px",
        }}>
        Explore the fully integrated suite of open source products and tools.
      </Text>
      <Grid
        columns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[3]}
        sx={{
          mb: 6,
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
      <Text
        sx={{
          maxWidth: 580,
          mx: "auto",
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          letterSpacing: "-1px",
        }}>
        Learn where to start and how to build with our Livepeer developer
        guides.
      </Text>
      <Grid
        columns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[3]}
        sx={{
          mx: "auto",
          justifyContent: "center",
        }}>
        {guides.map((card) => (
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
