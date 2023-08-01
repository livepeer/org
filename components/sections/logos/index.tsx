import { Container, Box } from "@livepeer/design-system";

const CardGrid = ({ bc = "white", logos }) => {
  return (
    <Box css={{ bc, position: "relative" }}>
      <Box
        css={{
          position: "relative",
        }}>
        <Container size="3">
          <Box
            css={{
              display: "grid",
              grid: "1fr/repeat(3,1fr)",
              position: "relative",
              height: "100%",
              maxWidth: "960px",
              margin: "0 auto",
              "@bp1": {
                grid: "1fr/repeat(3,1fr)",
              },
            }}>
            {logos.map((logo, i) => {
              return (
                <Box
                  key={i}
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <img
                    key={i}
                    src={logo.url}
                    alt={logo.alt}
                    width="90"
                    height="90"
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CardGrid;
