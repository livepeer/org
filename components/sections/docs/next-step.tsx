/** @jsx jsx */

import Link from "next/link";
import { jsx, useColorMode } from "theme-ui";

type Props = {
  href: string;
  title: string;
  isLeft?: boolean;
};

export const Arrow = () => {
  const [colorMode] = useColorMode();
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33301 8L12.6663 8"
        stroke={colorMode === "default" ? "#666666" : "#A5A5A5"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.3335L12.6667 8.00016L8 12.6668"
        stroke={colorMode === "default" ? "#666666" : "#A5A5A5"}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const NextStep = ({ href, title, isLeft }: Props) => {
  const [colorMode] = useColorMode();
  return (
    <Link href={href} passHref>
      <a
        sx={{
          width: "100%",
          alignSelf: isLeft ? "flex-start" : "flex-end",
          mt: "72px",
          maxWidth: ["200px", "240px"],
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          padding: "16px 24px",
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
          border: "1px solid",
          borderColor: "docs.border",
          borderRadius: "16px",
          backgroundColor: "docs.switch",
          transition: "all 0.2s",
          ":hover": {
            textDecoration: "none !important",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
            backgroundColor: colorMode === "dark" && "#45464A",
          },
        }}>
        <div sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
          <p
            sx={{
              mb: "0 !important",
              mr: "8px",
              fontSize: "14px",
              color: "docs.gray",
            }}>
            Next
          </p>
          <Arrow />
        </div>
        <p
          sx={{
            mb: "0 !important",
            color: "docs.text",
            fontSize: "22px",
            lineHeight: "28px",
            fontWeight: "600",
          }}>
          {title}
        </p>
      </a>
    </Link>
  );
};

export default NextStep;
