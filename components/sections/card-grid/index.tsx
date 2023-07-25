import {
  Container,
  Grid,
  Box,
  Flex,
  Text,
  Heading,
} from "@livepeer/design-system";
import Image from "next/image";

const CardGrid = ({ bc = "white", title, heading, description, items }) => {
  return (
    <Box css={{ bc, position: "relative" }}>
      <Box
        css={{
          position: "relative",
          py: 60,
          "@bp2": {
            py: 100,
          },
        }}>
        <Container size="3">
          <Flex direction="column" css={{ maxWidth: 960 }}>
            <Text size="5" css={{ fontWeight: 600, mb: "$4" }}>
              {title}
            </Text>
            <Heading
              size="3"
              css={{
                maxWidth: 540,
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
          <Grid
            css={{
              gap: "$6",
              grid: "1fr/repeat(2,1fr)",
              "@bp1": {
                grid: "1fr/repeat(2,1fr)",
              },
            }}>
            {items.map((item, i) => {
              return (
                <Box
                  key={i}
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    mb: "$4",
                  }}>
                  <Box css={{ height: 140 }}>
                    <Text
                      size={5}
                      css={{
                        position: "relative",
                        fontWeight: 500,
                        mb: "$4",
                      }}>
                      {item.title}
                    </Text>
                    <Text size={4} variant="gray" css={{ mb: "$4" }}>
                      {item.description}
                    </Text>
                  </Box>
                  {/* <Image src={item.image.url} width={600} height={400} /> */}
                </Box>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CardGrid;
