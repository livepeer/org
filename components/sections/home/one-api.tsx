import { Container, Box, Heading, Text, Flex } from "theme-ui";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@livepeer/design-system";
import { MdTaskAlt } from "react-icons/md";

const workflows = [
  {
    selected: true,
    title: "Live",
    description:
      "Implement the entire video workflow required for livestreaming with just few lines of code.",
    list: [
      {
        heading: "Go live effortlessly from any source",
        subheading:
          "Stream seamlessly from mobile apps or broadcast software to any device with an optimized viewing experience.",
      },
      {
        heading: "Protect your streams with token-based access controls",
        subheading:
          "Control who has access to livestreams and for how long with token and wallet-based access controls.",
      },
      {
        heading: "Build low-latency livestreaming experiences",
        subheading:
          "A livestreaming latency as low as 2 seconds enables a natural interactive exchange between audiences and content creators.",
      },
      {
        heading: "Get real-time viewership and performance health",
        subheading: "Understand engagement and improve the viewer experience.",
      },
    ],
  },
  {
    title: "On-demand",
    description:
      "Deliver instant, dependable, and high-quality on-demand video to users worldwide.",
    list: [
      {
        heading: "Upload any common video format",
        subheading:
          "The Livepeer Network ensures standardization for seamless playback on any device or connection.",
      },
      {
        heading: "Ensure high-quality, optimized streaming",
        subheading:
          "Livepeer generates multiple video resolutions ensuring an optimized streaming experience based on the user's device and available bandwidth.",
      },
      {
        heading: "Understand your audience with video engagement analytics",
        subheading:
          "Leveraging real-time engagement metrics such as view counts and watch time, as well as performance metrics such as error rate, time to first frame, and more.",
      },
    ],
  },
  {
    title: "Transcode",
    description:
      "Tap into Livepeer’s global network of always-on transcoding providers.",
    list: [
      {
        heading: "Write results to any S3-compatible storage provider",
        subheading:
          "Livepeer’s transcoding pipeline is designed to plug and play with any S3-compatible storage provider.",
      },
      {
        heading: "Scale your transcoding capacity without limits",
        subheading:
          "The Livepeer Network's represents enough bandwidth to transcode all the real-time video streaming through Twitch, Facebook, and Youtube combined.",
      },
      {
        heading: "Save 10x on transcoding costs",
        subheading:
          "Livepeer, a people-powered network, avoids cloud computing competition with Google Cloud and AWS, offering cost-effective usage-based pricing, not reserved server space.",
      },
    ],
  },
];

const TT = ({ title, description, value }) => (
  <TabsTrigger
    css={{
      px: "$4",
      py: "$5",
      maxWidth: 375,
      border: 0,
      display: "block",
      height: "auto",
      borderRadius: "$4 !important",
      cursor: "pointer",
    }}
    value={value}>
    <Box
      sx={{
        letterSpacing: "-1.5px",
        fontSize: 40,
        fontWeight: 800,
        marginBottom: 3,
      }}>
      {title}
    </Box>
    <Text sx={{ fontSize: 15, lineHeight: 1.5 }}>{description}</Text>
  </TabsTrigger>
);

export const StartBuilding = () => (
  <Box sx={{ backgroundColor: "muted" }} id="start-building">
    <Container variant="section" sx={{ pt: 100 }}>
      <Box sx={{ textAlign: "center" }}>
        <Text variant="section.titleLabel">Built for you workflow</Text>
        <Heading
          variant="section.titleFade"
          sx={{
            lineHeight: 1,
            position: "relative",
          }}>
          One open API for all your video workflows
        </Heading>
        <Heading variant="section.subtitle" sx={{ mb: 100, maxWidth: 800 }}>
          Instantly upload, process, store, and deliver live and on-demand video
          experiences with one open and easy-to-use API — reliably, affordably,
          at scale, and with zero vendor lock-in.
        </Heading>
        {/* <A
          variant="buttons.neutral"
          href="https://docs.livepeer.org"
          target="_blank"
          sx={{ mb: 6 }}>
          Read the docs
          <i sx={{ ml: 1, fontSize: 4 }}>
            <FiArrowUpRight />
          </i>
        </A> */}
      </Box>
      <Tabs
        defaultValue="tab-0"
        orientation="vertical"
        css={{ maxWidth: 1060, mx: "auto" }}>
        <TabsList
          css={{
            '[data-orientation="vertical"][data-state="active"]': {
              bc: "black",
              color: "white",
            },
          }}>
          {workflows.map(({ title, description }, i) => (
            <TT
              key={`tab-${i}`}
              value={`tab-${i}`}
              title={title}
              description={description}
            />
          ))}
        </TabsList>
        {workflows.map(({ list }, i) => {
          return (
            <TabsContent
              css={{ mt: "$4", ml: "$9", maxWidth: 620 }}
              value={`tab-${i}`}>
              {list?.map(({ heading, subheading }, i) => {
                return (
                  <Box sx={{ marginBottom: 4 }}>
                    <Flex>
                      <Box
                        sx={{
                          fontSize: "22px",
                          marginRight: 24,
                          marginTop: "3px",
                        }}>
                        <MdTaskAlt />
                      </Box>
                      <Box>
                        <Text
                          sx={{
                            fontWeight: 600,
                            marginBottom: 1,
                            fontSize: 18,
                          }}>
                          {heading}
                        </Text>
                        <Text sx={{ fontSize: 18 }}>{subheading}</Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </TabsContent>
          );
        })}
      </Tabs>
    </Container>
  </Box>
);

export default StartBuilding;
