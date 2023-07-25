import { Container, Box, Flex, Text, Heading } from "@livepeer/design-system";

const Why = ({ title, heading, description, reasons }) => {
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
              mb: "$7",
              "@bp2": {
                mb: "$2",
                ai: "center",
                flexDirection: "row",
              },
            }}>
            <Flex direction="column" css={{ maxWidth: 760 }}>
              <Text size="5" css={{ fontWeight: 600, mb: "$4" }}>
                {title}
              </Text>
              <Heading
                size="3"
                css={{
                  maxWidth: 420,
                  lineHeight: 1.4,
                  fontWeight: 700,
                  mb: "$4",
                  mr: "$6",
                  "@bp2": { lineHeight: 1.4 },
                }}>
                {heading}
              </Heading>
              <Text variant="gray" size="5" css={{ lineHeight: 1.7, mb: "$8" }}>
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
                <Text
                  size={4}
                  css={{
                    position: "relative",
                    fontWeight: 500,
                    mb: "$5",
                  }}>
                  {reason.title}
                </Text>
                <Text
                  size={4}
                  variant="gray"
                  as={Array.isArray(reason.description) ? "ul" : "div"}
                  css={{
                    lineHeight: 1.6,
                    listStyle: "initial",
                    paddingLeft: Array.isArray(reason.description) ? 15 : 0,
                  }}>
                  {Array.isArray(reason.description)
                    ? reason.description.map((li, i) => (
                        <Box key={i} as="li" css={{ mb: "$2", pl: 10 }}>
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
