import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
} from "@livepeer/design-system";
import Link from "next/link";
import * as Hi from "react-icons/hi";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";
import * as Md from "react-icons/md";

const getIconProvider = (provider) => {
  if (provider === "hi") {
    return Hi;
  }
  if (provider === "fa") {
    return Fa;
  }
  if (provider === "fi") {
    return Fi;
  }
  if (provider === "mdi") {
    return Md;
  }
};

const Why = ({ title, heading, description, reasons }) => {
  return (
    <Box css={{ position: "relative" }}>
      <Box
        css={{
          position: "relative",
          py: 60,
          "@bp2": {
            py: 120,
          },
        }}>
        <Container size="3">
          <Flex
            css={{
              ai: "flex-start",
              flexDirection: "column",
              width: "100%",
              mb: "$7",
              "@bp2": {
                mb: "$2",
                ai: "center",
                flexDirection: "row",
              },
            }}>
            <Flex direction="column" css={{ maxWidth: 960 }}>
              <Text size="5" css={{ fontWeight: 600, mb: "$4" }}>
                {title}
              </Text>
              <Heading
                size="3"
                css={{
                  maxWidth: 520,
                  lineHeight: 1.4,
                  fontWeight: 700,
                  mb: "$4",
                  mr: "$6",
                  "@bp2": { lineHeight: 1.4 },
                }}>
                {heading}
              </Heading>
              <Text variant="gray" size="4" css={{ mb: "$8" }}>
                {description}
              </Text>
            </Flex>
            {/* <Link href="/register" passHref>
              <Button arrow as="a" size="4">
                Sign up for free
              </Button>
            </Link> */}
          </Flex>
        </Container>
        <Box
          css={{
            display: "grid",
            grid: "1fr/repeat(1,1fr)",
            position: "relative",
            height: "100%",
            maxWidth: "1095px",
            margin: "0 auto",
            "@bp1": {
              grid: "1fr/repeat(2,1fr)",
            },
            "@bp3": {
              grid: "1fr/repeat(3,1fr)",
            },
          }}>
          {reasons.map((reason, i) => {
            return (
              <Box
                key={i}
                css={{
                  pl: "$6",
                  pr: "$6",
                  width: "100%",
                  mb: "$7",
                  "@bp1": {
                    pl: "$3",
                    "&:nth-child(odd)": {
                      pl: "$6",
                    },
                  },
                  "@bp3": {
                    "&:nth-child(odd)": {
                      pl: "$3",
                    },
                  },
                }}>
                {reason?.icon?.provider && (
                  <Box
                    css={{
                      mb: "$3",
                      width: 44,
                      height: 44,
                      minWidth: 44,
                      minHeight: 44,
                      borderRadius: 1000,
                      display: "flex",
                      ai: "center",
                      color: "$hiContrast",
                      jc: "center",
                      background:
                        "linear-gradient(90deg, rgba(107, 87, 214, 0.1) 0%, rgba(183, 167, 245, 0.1) 100%)",
                    }}>
                    {getIconProvider(reason.icon.provider)[reason.icon.name]()}
                  </Box>
                )}
                <Text
                  css={{
                    position: "relative",
                    fontWeight: 500,
                    mb: "$5",
                    "&:before": {
                      position: "absolute",
                      top: "4px",
                      left: "-$space$3",
                      width: "1px",
                      height: "$3",
                      backgroundColor: "$green9",
                      content: '""',
                    },
                  }}>
                  {reason.title}
                </Text>
                <Text
                  variant="gray"
                  as={Array.isArray(reason.description) ? "ul" : "div"}
                  css={{ lineHeight: 1.6, listStyle: "initial" }}>
                  {Array.isArray(reason.description)
                    ? reason.description.map((li) => (
                        <Box as="li" css={{ mb: "$2" }}>
                          {li}
                        </Box>
                      ))
                    : reason.description}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
