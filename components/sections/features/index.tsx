import {
  Container,
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Link,
} from "@livepeer/design-system";
import { FiArrowUpRight } from "react-icons/fi";

const Why = ({ title, heading, description, items, columns }) => {
  return (
    <Box css={{ position: "relative" }}>
      <Box
        css={{
          position: "relative",
          py: 60,
          "@bp2": {
            py: 100,
          },
        }}>
        <Container size="3">
          <Flex
            css={{
              ai: "flex-start",
              flexDirection: "column",
              width: "100%",
              "@bp1": { mb: "$7" },
              "@bp2": {
                mb: "$2",
                ai: "center",
                flexDirection: "row",
              },
            }}>
            <Flex
              direction="column"
              css={{ maxWidth: 600, "@bp2": { mb: "$7" } }}>
              <Text size="5" css={{ fontWeight: 600, mb: "$4" }}>
                {title}
              </Text>
              <Heading
                size="3"
                css={{
                  lineHeight: 1.4,
                  fontWeight: 700,
                  mb: "$4",
                  mr: "$6",
                  "@bp2": { lineHeight: 1.4 },
                }}>
                {heading}
              </Heading>
              <Text variant="gray" size="5" css={{ lineHeight: 1.7, mb: "$6" }}>
                {description}
              </Text>
            </Flex>
            <Flex
              align="center"
              css={{ ml: "$8", display: "none", "@bp2": { display: "flex" } }}>
              <Link
                href="https://livepeer.studio/register"
                target="_blank"
                css={{
                  mb: "$8",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}>
                <Button
                  variant="green"
                  size="4"
                  css={{ display: "flex", gap: "$2" }}>
                  Start building
                  <FiArrowUpRight />
                </Button>
              </Link>
              <Link
                href="https://docs.livepeer.org"
                target="_blank"
                css={{
                  mb: "$8",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}>
                <Button size="4" css={{ display: "flex", gap: "$2" }}>
                  Read the docs
                  <FiArrowUpRight />
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
        <Container size="3">
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
                gap: "$6",
              },
              "@bp3": {
                grid: `1fr/repeat(${columns ? columns : 3},1fr)`,
              },
            }}>
            {items.map((item, i) => {
              return (
                <Box
                  key={i}
                  css={{
                    width: "100%",
                    mb: "$4",
                    "@bp1": {
                      pl: 0,
                      "&:nth-child(odd)": {
                        pl: 0,
                      },
                    },

                    "@bp3": {
                      "&:nth-child(odd)": {
                        pl: 0,
                      },
                    },
                  }}>
                  <Text
                    size={4}
                    css={{
                      position: "relative",
                      fontWeight: 500,
                      mb: "$5",
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    variant="gray"
                    as={Array.isArray(item.description) ? "ul" : "div"}
                    css={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      listStyle: "initial",
                      paddingLeft: Array.isArray(item.description) ? 15 : 0,
                    }}>
                    {Array.isArray(item.description)
                      ? item.description.map((li, i) => (
                          <Box key={i} as="li" css={{ mb: "$2", pl: 10 }}>
                            {li}
                          </Box>
                        ))
                      : item.description}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Why;
