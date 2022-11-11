import { Card, Heading, Box, Grid } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  FaDiscord,
  FaGlobe,
  FaLink,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

export const StakingCard = ({
  image,
  title,
  richtext,
  website,
  twitter,
  discord,
  linkedin,
  telegram,
  link,
}) => {
  return (
    <Card
      backgroundColor="transparent"
      sx={{ maxWidth: "unset", paddingX: "24px", paddingY: "24px" }}>
      <Grid
        sx={{
          gridTemplateColumns: "64px 1fr",
          alignItems: "center",
          height: "100%",
        }}>
        {image && (
          <Box mb="1rem">
            <Image
              src={image}
              width="80px"
              height="80px"
              alt={title}
              objectFit="contain"
            />
          </Box>
        )}
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
              {telegram && (
                <a href={telegram}>
                  <FaTelegram />
                </a>
              )}
              {link && (
                <a href={link}>
                  <FaLink />
                </a>
              )}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Card>
  );
};
