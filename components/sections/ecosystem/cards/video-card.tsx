import { Box, Button, Card, Heading, Link } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";

export const VideoCard = ({ image, title, richtext, website }) => {
  return (
    <Card
      backgroundColor="transparent"
      color="white"
      sx={{
        maxWidth: "unset",
        borderColor: "#373737",
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
        }}>
        {title}
      </Heading>
      <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
        <TinaMarkdown content={richtext} />
      </Box>
      {website && (
        <Link sx={{ marginTop: "auto" }} href={website}>
          <Button sx={{ marginTop: "auto" }}>Visit Website</Button>
        </Link>
      )}
    </Card>
  );
};
