import PricingCard, { PricingCardContent } from "./pricingCard";
import {
  Box,
  Grid,
  Flex,
  Text,
  Badge,
  Tooltip,
  Banner,
} from "@livepeer/design-system";

const PricingCardsContainer = () => {
  return (
    <Flex
      direction="column"
      css={{
        px: "36px",
        maxWidth: "1245px",
        margin: "0 auto",
        width: "100%",
        pb: "$8",
        "@bp2": {
          px: "12px",
        },
      }}>
      <Grid
        css={{
          position: "relative",
          gap: "8px",
          grid: "1fr/repeat(1,1fr)",
          "@bp2": {
            position: "relative",
            overflowX: "scroll",
            overflowY: "hidden",
            "-webkit-overflow-scrolling": "touch",
            maxWidth: 1245,
            minWidth: 1245,
            gridTemplateColumns: "16% 16% 16% 16% 16% 16%",
          },
        }}>
        <Box
          css={{
            flexDirection: "column",
            px: "$2",
            display: "none",
            "@bp2": {
              display: "block",
              pt: 100,
            },
          }}>
          <Box css={{ fontWeight: 600, fontSize: "20px", mb: 24 }}>
            Features
          </Box>
          <PricingCardContent>
            <Tooltip
              multiline
              content=" Create multiple versions of your source stream for different
              devices in real time.">
              <Text
                size="3"
                css={{
                  fontWeight: 600,
                  mb: "$1",
                  textDecoration: "underline dotted rgb(67, 76, 88)",
                  cursor: "default",
                }}>
                Transcoding
              </Text>
            </Tooltip>
          </PricingCardContent>
          <PricingCardContent>
            <Tooltip
              multiline
              content=" Deliver high-quality playback on whatever device or bandwidth the
              end viewer is watching.">
              <Text
                size="3"
                css={{
                  fontWeight: 600,
                  mb: "$1",
                  textDecoration: "underline dotted rgb(67, 76, 88)",
                  cursor: "default",
                }}>
                Streaming
              </Text>
            </Tooltip>
          </PricingCardContent>
          <PricingCardContent>
            <Tooltip
              multiline
              content="Store video content reliably on decentralized or traditional cloud
              storage providers.">
              <Text
                size="3"
                css={{
                  fontWeight: 500,
                  mb: "$1",
                  textDecoration: "underline dotted rgb(67, 76, 88)",
                  cursor: "default",
                }}>
                Storage
              </Text>
            </Tooltip>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Recording
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Multistreaming
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Low Latency Livestreaming*
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Multiparticipant Livestreaming**
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Viewership
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Transcoding API
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Live / VOD Token Gating
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              WebRTC
            </Text>
          </PricingCardContent>
          <PricingCardContent>
            <Text
              size="3"
              css={{
                fontWeight: 500,
                mb: "$1",
              }}>
              Video NFT Minting
            </Text>
          </PricingCardContent>
        </Box>

        {/* Hacker */}
        <PricingCard
          pricingTitle="Hacker"
          pricingDescription="Free"
          cardBg="$green3"
          titleColor="black"
          btn={{
            display: "Sign up",
            href: "https://livepeer.studio/register",
            color: "$loContrast",
            bg: "$hiContrast",
          }}>
          <Box css={{ mt: "20px" }}>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                1,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                10,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Storage
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                10,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Recording
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multistreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Low Latency Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multiparticipant Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Viewership
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding API
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Live / VOD Token Gating
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                WebRTC
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Video NFT Minting
              </Badge>
              ✓
            </PricingCardContent>
          </Box>
        </PricingCard>

        {/* Growth */}
        <PricingCard
          pricingTitle="Growth"
          pricingDescription="$100/month"
          cardBg="$green4"
          btn={{
            display: "Sign up",
            href: "https://livepeer.studio/register",
            color: "$loContrast",
            bg: "$hiContrast",
          }}>
          <Box css={{ mt: "20px" }}>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                3,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                100,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                10,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Recording
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multistreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Low Latency Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multiparticipant Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Viewership
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding API
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Livepeer / VOD Token Gating
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                WebRTC
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Video NFT Minting
              </Badge>
              ✓
            </PricingCardContent>
          </Box>
        </PricingCard>

        {/* Scale */}
        <PricingCard
          pricingTitle="Scale"
          pricingDescription="$500/month"
          cardBg="$green5"
          btn={{
            display: "Sign up",
            href: "https://livepeer.studio/register",
            color: "$loContrast",
            bg: "$hiContrast",
          }}>
          <Box css={{ mt: "20px" }}>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                20,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                500,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Storage
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                50,000
              </Box>
              <Box
                css={{
                  fontSize: "14px",
                  lineHeight: "24px",
                }}>
                minutes/month
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Recording
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multistreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Low Latency Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multiparticipant Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Viewership
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding API
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Livepeer / VOD Token Gating
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                WebRTC
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Video NFT Minting
              </Badge>
              ✓
            </PricingCardContent>
          </Box>
        </PricingCard>

        {/* Pay as you go */}
        <PricingCard
          pricingTitle="Pay-as-you-go"
          pricingDescription="Pay for what you use"
          cardBg="$green6"
          btn={{
            display: "Sign up",
            href: "https://livepeer.studio/register",
            color: "$loContrast",
            bg: "$hiContrast",
          }}>
          <Box css={{ mt: "20px" }}>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                $5 / 1,000 minutes
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                $0.40 / 1,000 minutes
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Storage
              </Badge>
              <Box
                css={{
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                $3 / 1,000 minutes
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Recording
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multistreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Low Latency Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multiparticipant Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Viewership
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding API
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Livepeer / VOD Token Gating
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                WebRTC
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Video NFT Minting
              </Badge>
              ✓
            </PricingCardContent>
          </Box>
        </PricingCard>

        {/* Enterprise */}
        <PricingCard
          pricingTitle="Enterprise"
          pricingDescription="Custom pricing"
          cardBg="$green7"
          btn={{
            display: "Contact us",
            href:
              "https://livepeer.studio/contact?utm_source=livepeer.studio&utm_medium=internal_page&utm_campaign=enterprise_plan",
            color: "$loContrast",
            bg: "$hiContrast",
          }}>
          <Box css={{ mt: "20px" }}>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding
              </Badge>
              <Box
                css={{
                  fontSize: "$3",
                  fontWeight: 600,
                }}>
                Custom pricing
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Streaming
              </Badge>
              <Box
                css={{
                  fontSize: "$3",
                  fontWeight: 600,
                }}>
                Custom pricing
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Storage
              </Badge>
              <Box
                css={{
                  fontSize: "$3",
                  fontWeight: 600,
                }}>
                Custom pricing
              </Box>
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Recording
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multistreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Low Latency Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Multiparticipant Livestreaming
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Viewership
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Transcoding API
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Livepeer / VOD Token Gating
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                WebRTC
              </Badge>
              ✓
            </PricingCardContent>
            <PricingCardContent>
              <Badge
                size="2"
                css={{
                  alignSelf: "center",
                  mb: "$2",
                  "@bp3": {
                    display: "none",
                  },
                }}>
                Video NFT Minting
              </Badge>
              ✓
            </PricingCardContent>
          </Box>
        </PricingCard>
      </Grid>
      <Box
        css={{
          mt: "$6",
          textAlign: "center",
          fontSize: "$3",
          fontStyle: "italic",
        }}>
        The Pay-as-you-go plan applies to minutes that go over the Hacker,
        Growth, and Scale plans.
      </Box>
      <Flex gap={3} justify="center" css={{ mt: "$5", fontSize: "$2" }}>
        <Box>*Open Beta</Box>
        <Box> **Closed Beta</Box>
      </Flex>
    </Flex>
  );
};

export default PricingCardsContainer;
