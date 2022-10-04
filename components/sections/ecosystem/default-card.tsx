import React from "react";
import { Card, Heading, Image } from "theme-ui";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const DefaultCard = ({ title, richtext }) => {
  return (
    <Card>
      <Image
        src={
          "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        }
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
