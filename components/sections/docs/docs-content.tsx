/** @jsx jsx */

import slugify from "@sindresorhus/slugify";
import { ReactNode, useMemo } from "react";
import { Box, jsx, SxStyleProp } from "theme-ui";

type HeadingProps = {
  children: ReactNode;
  as: "h1" | "h2" | "h3";
};

export const Heading = ({ children, as }: HeadingProps) => {
  const sx: SxStyleProp = useMemo(() => {
    switch (as) {
      case "h1":
        return {
          fontSize: ["40px", "48px"],
          mb: "32px",
          "&:not(:first-child)": {
            mt: "72px",
          },
        };
      case "h2":
        return {
          fontSize: ["24px", "32px"],
          mb: "24px",
          "&:not(:first-child)": {
            mt: "72px",
          },
        };
      case "h3":
        return {
          fontSize: ["18px", "24px"],
          mb: "18px",
          "&:not(:first-child)": {
            mt: "48px",
          },
        };

      default:
        break;
    }
  }, [as]);

  const id = slugify(children.toString());

  return (
    <Box
      as={as}
      id={id}
      sx={{
        ...sx,
        color: "docs.text",
        fontWeight: "bold",
        fontFamily: "special",
        textRendering: "optimizeLegibility",
      }}>
      {children}
    </Box>
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
