/** @jsx jsx */

import { jsx } from "theme-ui";

export const Heading = ({ children }) => {
  return (
    <h1
      sx={{
        fontSize: ["40px", "48px"],
        mb: "32px",
        color: "docs.text",
        fontWeight: "bold",
        fontFamily: "special",
      }}>
      {children}
    </h1>
  );
};

export const SubHeading = ({ children }) => {
  return (
    <h1
      sx={{
        color: "docs.text",
        fontSize: ["24px", "32px"],
        lineHeight: ["24px", "40px"],
        mb: "24px",
        mt: "72px",
        fontWeight: "bold",
        fontFamily: "special",
      }}>
      {children}
    </h1>
  );
};

export const Text = ({ children }) => {
  return (
    <p sx={{ fontSize: "16px", lineHeight: "32px", color: "docs.text" }}>
      {children}
    </p>
  );
};
