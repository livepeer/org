/** @jsx jsx */

import Link from "next/link";
import { jsx, useColorMode } from "theme-ui";
import { Arrow } from "./next-step";

type Props = {
  href: string;
  title: string;
  isLeft?: boolean;
};

const PreviousStep = ({ href, title, isLeft }: Props) => {
  const [colorMode] = useColorMode();

  return (
    <Link href={href} passHref>
      <a
        sx={{
          width: "100%",
          alignSelf: isLeft ? "flex-start" : "flex-end",
          mt: "72px",
          maxWidth: "360px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          padding: "24px",
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
          border: "1px solid",
          borderColor: "docs.border",
          borderRadius: "16px",
          backgroundColor: "docs.switch",
          transition: "all 0.2s",
          ":hover": {
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
            backgroundColor: colorMode === "dark" && "#45464A",
          },
        }}>
        <div sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
          <i sx={{ transform: "rotate(180deg)" }}>
            <Arrow />
          </i>
          <p sx={{ ml: "8px", fontSize: "14px", color: "docs.gray" }}>
            Previous Step
          </p>
        </div>
        <p
          sx={{
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

export default PreviousStep;
