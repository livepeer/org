import { Box, Container, Link } from "theme-ui";

export const CtaBanner = ({ divider, title }) => {
  return (
    <>
      {divider && (
        <Box
          sx={{
            background: "linear-gradient(#FFFFFF, #FAFAFA)",
            width: "100%",
            height: "80px",
            position: "absolute",
          }}
        />
      )}
      <Box sx={{ bg: "muted", px: 3 }} id="apps">
        <Container
          variant="section"
          sx={{
            py: 0,
            position: "relative",
            overflow: "hidden",
          }}>
          <Box
            sx={{ display: "grid", placeItems: "center", marginTop: "32px" }}>
            Building something cool with Livepeer?{" "}
            <Link
              href="https://lvpr.link/3SbVOLR"
              target="_blank"
              sx={{ textDecoration: "underline" }}>
              Submit your project
            </Link>
            .
          </Box>
        </Container>
      </Box>
    </>
  );
};
