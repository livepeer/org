import { Box, Button, Card, Heading, Image } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const CommunityCard = ({ title, richtext }) => {
  return (
    <Card
      backgroundColor="transparent"
      sx={{
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
          textAlign: "center",
        }}>
        {title}
      </Heading>
      <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
        <TinaMarkdown content={richtext} />
      </Box>
      <Button
        sx={{
          background: "transparent",
          color: "#00D97D",
          ":hover": { background: "transparent" },
        }}>
        Visit website
      </Button>
    </Card>
  );
};
