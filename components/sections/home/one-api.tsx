import { Container, Box, Heading, Text, Flex, Grid } from "theme-ui";
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
    description: (
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        Go live with just few lines of code.
      </Box>
    ),
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
          "Latency as low as two seconds enables natural interactive experiences between audiences and content creators.",
      },
      {
        heading: "Get real-time viewership and performance health",
        subheading: "Understand engagement and improve the viewer experience.",
      },
    ],
  },
  {
    title: "On-demand",
    description: "Deliver on-demand video experiences to viewers worldwide.",
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
        heading: "Understand your audience",
        subheading:
          "Leveraging real-time engagement metrics such as view counts and watch time.",
      },
      {
        heading: "Optimizing the viewer experience",
        subheading:
          "Monitor and optimize the viewer experience with performance metrics such as error rate, time to first frame, and more.",
      },
    ],
  },
  {
    title: "Transcode",
    description:
      "Tap into a global network of always-on transcoding providers.",
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

const TT = ({ title, value }) => (
  <TabsTrigger
    css={{
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
      transitionDuration: ".15s",
      border: 0,
      fontSize: "$4",
      fontWeight: 600,
      color: "#71717a",
      py: "$4",
      px: "$4",
      cursor: "pointer",
      minWidth: 130,
    }}
    value={value}>
    <Box>{title}</Box>
  </TabsTrigger>
);

export const StartBuilding = () => (
  <Box sx={{ backgroundColor: "muted" }} id="start-building">
    <Container variant="section" sx={{ pt: 100 }}>
      <Box sx={{ textAlign: "center" }}>
        <Heading
          variant="section.subtitle"
          sx={{ marginBottom: 20, fontWeight: 600 }}>
          One API for all your video workflows
        </Heading>
      </Box>
      <Tabs
        defaultValue="tab-0"
        css={{
          maxWidth: 1060,
          mx: "auto",
          justifyContent: "center",
        }}>
        <TabsList
          css={{
            alignSelf: "center",
            width: "auto",
            padding: "$1",
            bc: "#f4f4f5",
            borderRadius: 8,
            '[data-state="active"]': {
              borderRadius: 6,
              bc: "white",
              color: "$hiContrast",
              boxShadow:
                "0px 30px 30px rgba(0, 0, 0, 0.02), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 1px 0px rgba(0, 0, 0, 0.05)",
            },
          }}>
          {workflows.map(({ title }, i) => (
            <TT key={`tab-${i}`} value={`tab-${i}`} title={title} />
          ))}
        </TabsList>
        {workflows.map(({ list }, i) => {
          return (
            <TabsContent value={`tab-${i}`}>
              <Heading
                variant="section.titleFade"
                sx={{
                  maxWidth: 720,
                  mx: "auto",
                  marginTop: [5, 5, 5, 5],
                  marginBottom: [5, 5, 5, 80],
                  position: "relative",
                }}>
                {workflows[i].description}
              </Heading>
              <Grid
                columns={[
                  `repeat(1, fit-content(100%))`,
                  `repeat(1, fit-content(100%))`,
                  `repeat(2, fit-content(100%))`,
                ]}
                gap={[40]}>
                {list?.map(({ heading, subheading }, i) => {
                  return (
                    <Box>
                      <Flex>
                        <Box
                          sx={{
                            fontSize: "22px",
                            marginRight: 24,
                            marginTop: "3px",
                            marginBottom: 40,
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
              </Grid>
            </TabsContent>
          );
        })}
      </Tabs>
    </Container>
  </Box>
);

export default StartBuilding;
