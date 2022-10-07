import { FaDiscord, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Box, Card, Grid, Heading, Image } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const AppCard = ({
  title,
  richtext,
  website,
  twitter,
  discord,
  linkedin,
}) => {
  return (
    <Card
      backgroundColor="transparent"
      sx={{
        maxWidth: "unset",
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
