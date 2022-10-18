import Link from "next/link";
import { Box, Button, Container, Heading } from "theme-ui";

export const CtaBanner = ({ divider, title }) => {
  return (
    <>
      {divider && (
        <Box
          sx={{
            background: "linear-gradient(#FFFFFF, #FAFAFA)",
            width: "100%",
            height: "80px",
          }}
        />
      )}
      <Box sx={{ bg: "muted", px: 3, py: "40px" }} id="apps">
        <Container
          variant="section"
          sx={{
            py: 0,
            position: "relative",
            overflow: "hidden",
          }}>
          <Heading sx={{ textAlign: "center", fontSize: "1.2rem" }}>
            {title}
          </Heading>
          <Link href={"/contact"}>
            <Box
              sx={{ display: "grid", placeItems: "center", marginTop: "32px" }}>
              <Button>Submit a Project</Button>
            </Box>
          </Link>
        </Container>
      </Box>
    </>
  );
};
