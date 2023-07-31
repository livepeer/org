import { Box, Flex, Container, Text, Button } from "@livepeer/design-system";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  bc = "white",
  heading,
  tagline,
  description,
  centered = false,
  skinny = false,
  image,
  ctas = [],
}) => {
  return (
    <Box css={{ bc: bc }}>
      <Box css={{ position: "relative" }}>
        <Container
          size="3"
          css={{
            px: "$4",
            "@bp2": {
              mx: "$4",
            },
            "@bp3": {
              px: "$4",
              mx: "auto",
            },
          }}>
          <Flex
            align="center"
            justify={centered ? "center" : "between"}
            css={{
              textAlign: centered ? "center" : "left",
              mb: skinny ? 0 : 120,
              width: "100%",
              pt: 50,
              "@bp2": {
                height: skinny ? 300 : "calc(100vh - 180px)",
              },
            }}>
            <Flex direction="column" css={{ maxWidth: 600 }}>
              {tagline && (
                <Text size="5" css={{ fontWeight: 600, mb: "$3" }}>
                  {tagline}
                </Text>
              )}
              <Box
                css={{
                  fontWeight: 700,
                  fontSize: "$8",
                  lineHeight: 1.3,
                  color: "$hiContrast",
                  mb: "$5",
                  "@bp2": {
                    fontSize: "$9",
                    lineHeight: "68px",
                    letterSpacing: "-2px",
                  },
                }}>
                {heading}
              </Box>
              <Text
                size="5"
                variant="gray"
                css={{ mb: "$6", lineHeight: 1.7, maxWidth: 550 }}>
                {description}
              </Text>
              <Flex align="center">
                {ctas.map((cta, i) => {
                  return (
                    <Link key={i} href={cta.href} passHref>
                      <Button
                        target={cta.isExternal ? "_blank" : null}
                        size={4}
                        as="a"
                        css={{ mr: "$2" }}
                        variant={cta.variant}>
                        {cta.title}
                      </Button>
                    </Link>
                  );
                })}
              </Flex>
            </Flex>
            {image && (
              <Box
                css={{
                  mt: 40,
                  position: "relative",
                  mr: -120,
                  display: "none",
                  "@bp2": {
                    display: "block",
                  },
                }}>
                <Box
                  css={{
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                    width: "100%",
                    pt: 40,
                  }}>
                  <Image
                    src={image}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    objectFit="contain"
                  />
                </Box>
                <Box
                  css={{
                    width: 545,
                    height: 545,
                    minWidth: 545,
                    minHeight: 545,
                    borderRadius: 1000,
                    background:
                      "linear-gradient(90deg, rgba(24, 121, 78, 0.4) 0%, rgba(221, 243, 91, 0.1) 100%)",
                  }}
                />
              </Box>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
