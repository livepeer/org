import { FaGlobe, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { Box, Card, Grid, Heading } from "theme-ui";
import Image from "next/image";

export const ExchangeCard = ({
  image,
  title,
  website,
  twitter,
  discord,
  linkedin,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "unset",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "magical",
        borderWidth: "0",
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
