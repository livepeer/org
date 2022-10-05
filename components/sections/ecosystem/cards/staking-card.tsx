import { Card, Heading, Image, Box, Grid } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { FaGlobe, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export const StakingCard = ({ title, richtext }) => {
  return (
    <Card
      backgroundColor="transparent"
      sx={{ paddingX: "24px", paddingY: "24px" }}>
      <Grid
        sx={{
          gridTemplateColumns: "64px 1fr",
          alignItems: "center",
          height: "100%",
        }}>
        <Image src="/temp/binance.png" width="64px" height="64px" mb={2} />
        <Box>
          <Heading
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "8px",
            }}>
            {title}
          </Heading>
          <Box sx={{ marginBottom: "8px" }}>
            <TinaMarkdown content={richtext} />
          </Box>
          <Grid
            color="#D2D2D2"
            sx={{
              gap: "1rem",
              marginRight: "auto",
              gridAutoFlow: "column",
            }}>
            <FaGlobe />
            <FaTwitter />
            <FaTelegram />
            <FaLinkedin />
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
};
