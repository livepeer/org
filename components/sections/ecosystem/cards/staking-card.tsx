import { Card, Heading, Image, Box, Grid } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  FaDiscord,
  FaGlobe,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export const StakingCard = ({
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
          <Box>
            <Grid
              sx={{
                gap: "1rem",
                gridAutoFlow: "column",
                gridAutoColumns: "16px",
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
          </Box>
        </Box>
      </Grid>
    </Card>
  );
};
