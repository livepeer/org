import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Link as A,
  Button,
} from "@livepeer/design-system";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Prefooter = ({ backgroundColor = "$loContrast" }) => (
  <Box css={{ position: "relative" }}>
    <Container
      size="3"
      css={{
        px: "$6",
        py: 70,
        width: "100%",
        "@bp3": {
          px: "$3",
          py: 120,
        },
      }}>
      <Box
        css={{
          px: 32,
          py: 60,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          color: "white",
          background:
            "linear-gradient(90deg, $colors$green5 0%, $colors$green8 33%,  $colors$green9 66%, $colors$green11 100%);",
          backgroundSize: "cover",
          "@bp2": {
            px: 72,
            py: 90,
          },
        }}>
        <Heading
          size="4"
          css={{
            color: "white",
            fontWeight: 700,
            mb: "$6",
            letterSpacing: "-1px",
          }}>
          Ready to get started?
        </Heading>
        <Text
          variant="white"
          size="6"
          css={{
            mb: "$7",
            maxWidth: "700px",
            mx: "auto",
          }}>
          Experience the world's open video infrastructure. Stream your first
          video in just a few clicks.
        </Text>
        <Flex
          css={{
            ai: "center",
            justifyContent: "center",
            flexDirection: "column",
            "@bp2": {
              flexDirection: "row",
            },
          }}>
          <Flex
            align="center"
            gap={1}
            css={{
              flexDirection: "column",
              "@bp2": {
                flexDirection: "row",
              },
            }}>
            <Link href="https://livepeer.studio" passHref>
              <Button
                target="_blank"
                size={4}
                as="a"
                css={{ mr: "$2", display: "flex", gap: "$2" }}
                variant="green">
                Start building
                <FiArrowUpRight />
              </Button>
            </Link>

            <Link
              href="https://livepeer.typeform.com/to/HTuUHdDR#lead_source=Website%20-%20Contact%20an%20Expert&contact_owner=xxxxx"
              passHref>
              <Button
                target="_blank"
                size={4}
                as="a"
                css={{ mr: "$2", display: "flex", gap: "$2" }}>
                Talk to a Livepeer expert
                <FiArrowUpRight />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default Prefooter;
