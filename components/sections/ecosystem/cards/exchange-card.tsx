import { FaGlobe, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { Card, Grid, Heading, Image } from "theme-ui";

export const ExchangeCard = ({ title, richtext }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "magical",
        borderWidth: "0",
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
