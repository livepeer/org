import { Box, Card, Grid, Heading } from "theme-ui";
import {
  FaDiscord,
  FaGlobe,
  FaLink,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";

export const Web3Card = ({
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
      sx={{
        maxWidth: "unset",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {image && (
        <Box mb="1rem">
          <Image
            src={image}
            width="160px"
            height="100px"
            alt={title}
            objectFit="contain"
          />
        </Box>
      )}
      <Heading
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          marginBottom: "24px",
          textAlign: "center",
        }}>
        {title}
      </Heading>
      <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
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
    </Card>
  );
};
