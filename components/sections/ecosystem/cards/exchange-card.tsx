import { FaGlobe, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { Card, Grid, Heading, Image } from "theme-ui";

export const ExchangeCard = ({
  title,
  website,
  twitter,
  discord,
  linkedin,
}) => {
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
        sx={{
          marginTop: "auto",
          gap: "1rem",
          gridAutoFlow: "column",
          svg: {
            color: "#D2D2D2",
            ":hover": {
              color: "#999",
            },
          },
        }}>
        {website && (
          <a href={website}>
            <FaGlobe />
          </a>
        )}
        {twitter && (
          <a href={twitter}>
            <FaTwitter />
          </a>
        )}
        {discord && (
          <a href={discord}>
            <FaDiscord />
          </a>
        )}
        {linkedin && (
          <a href={linkedin}>
            <FaLinkedin />
          </a>
        )}
      </Grid>
    </Card>
  );
};
