import { FaGlobe, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { Box, Card, Grid, Heading, Image } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const AppCard = ({ title, richtext }) => {
  return (
    <Card
      backgroundColor="transparent"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Image
        src="/temp/binance.png"
        width="90px"
        height="90px"
        mb={2}
        sx={{ objectFit: "cover", marginBottom: "16px" }}
      />
      <Heading
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          marginBottom: "24px",
        }}>
        {title}
      </Heading>
      <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
        <TinaMarkdown content={richtext} />
      </Box>
      <Grid
        color="#D2D2D2"
        sx={{
          marginTop: "auto",
          gap: "1rem",
          gridAutoFlow: "column",
        }}>
        <FaGlobe />
        <FaTwitter />
        <FaTelegram />
        <FaLinkedin />
      </Grid>
    </Card>
  );
};
