import { Card, Heading, Image } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const DefaultCard = ({ title, richtext }) => {
  return (
    <Card>
      <Image
        src="/temp/binance.png"
        width="90px"
        height="90px"
        mb={2}
        sx={{ objectFit: "cover" }}
      />
      <Heading
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
        }}
        mb={2}>
        {title}
      </Heading>
      <TinaMarkdown content={richtext} />
    </Card>
  );
};
