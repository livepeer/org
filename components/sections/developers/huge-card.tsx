/** @jsx jsx */
import SectionLayout from "components/layouts/section";
import NetworkSvg from "components/svgs/network";
import { jsx, Card, Grid, Text, Heading, Flex, Box, Link as A } from "theme-ui";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const HugeCardSection = ({ card }) => {
  return (
    <SectionLayout
      background="muted"
      pushSx={{ py: ["80px", "160px"] }}
      headingContainerPushSx={{ mb: 0 }}>
      <Card
        sx={{
          minWidth: "100%",
          p: [4, 5, null, 5],
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            position: "absolute",
            top: ["-120px", "-110px", 280],
            left: ["-172px", "-142px", -170],
            pointerEvents: "none",
            width: "464px",
            height: "464px",
            display: ["none", "none", "flex"],
            alignItems: "center",
            justifyContent: "center",
          }}>
          <NetworkSvg />
        </Box>
        <Box sx={{ zIndex: "general", position: "relative" }}>
          <Grid
            sx={{
              gridTemplateColumns: [
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ],
            }}>
            <Box>
              <Text variant="large" sx={{ textAlign: "left" }}>
                {card.label}
              </Text>
              <Heading
                variant="heading.2"
                sx={{ mt: 2, mb: 3, textAlign: "left" }}>
                {card.title}
              </Heading>
              <Text sx={{ mb: 4 }}>By Livepeer, Inc.</Text>
              <A
                sx={{ mb: 4 }}
                variant="buttons.studio"
                href="https://livepeer.studio"
                target="_blank">
                Livepeer Studio
                <i sx={{ ml: 2, fontSize: 4 }}>
                  <FiArrowUpRight />
                </i>
              </A>
            </Box>
            <Box>
              <Box>
                {card.list.map((item, i) => (
                  <Flex key={i} sx={{ "&:not(:last-of-type)": { mb: 4 } }}>
                    <i sx={{ color: "#0a5cd8", fontSize: 5, mr: 3 }}>
                      <FiCheckCircle />
                    </i>
                    <Text variant="normal">
                      <Box>
                        <Text
                          sx={{
                            textAlign: "left",
                            lineHeight: 1,
                            mb: 2,
                            fontWeight: 600,
                          }}>
                          {item.title}
                        </Text>
                        <Text sx={{ fontSize: "16px" }}>{item.subtitle}</Text>
                      </Box>
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Grid>
        </Box>
      </Card>
    </SectionLayout>
  );
};

export default HugeCardSection;
