/** @jsx jsx */

import { ReactNode } from "react";
import { jsx } from "theme-ui";

type HeadingProps = {
  children: ReactNode;
  as: "h1" | "h2" | "h3";
};

export const Heading = ({ children, as }: HeadingProps) => {
  return (
    <p
      sx={{
        fontSize:
          as === "h1"
            ? ["40px", "48px"]
            : as === "h2"
            ? ["24px", "32px"]
            : ["18px", "24px"],
        mb: as === "h1" ? "32px" : as === "h2" ? "24px" : "18px",
        mt: as === "h2" ? "72px" : "",
        color: "docs.text",
        fontWeight: "bold",
        fontFamily: "special",
      }}>
      {children}
    </p>
  );
};

export const Text = ({ children }) => {
  return (
    <p sx={{ fontSize: "16px", lineHeight: "32px", color: "docs.text" }}>
      {children}
    </p>
  );
};

export const Link = ({ children, href }) => {
  return (
    <Link href={href}>
      <a
        sx={{
          fontSize: "16px",
          lineHeight: "32px",
          color: "docs.selected",
          fontWeight: "600",
          cursor: "pointer",
        }}>
        {children}
      </a>
    </Link>
  );
};
