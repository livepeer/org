import { Box, Button, Card, Heading, Image, Link } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const VideoCard = ({ title, richtext, website }) => {
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
      {website && (
        <Link sx={{ marginTop: "auto" }} href={website}>
          <Button sx={{ marginTop: "auto" }}>Visit Website</Button>
        </Link>
      )}
    </Card>
  );
};
