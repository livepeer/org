/** @jsx jsx */

import Link from "next/link";
import { jsx, useColorMode } from "theme-ui";

type Props = {
  color?: string;
  title?: string;
};

const Icon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="28" fill="#00EB88" />
      <path
        d="M32.6666 35L39.6666 28L32.6666 21"
        stroke="#131418"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3334 21L16.3334 28L23.3334 35"
        stroke="#131418"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Arrow = ({ color }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const DocsCard = ({ title }: Props) => {
  const [colorMode] = useColorMode();
  return (
    <div
      sx={{
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
        border: "1px solid",
        borderColor: "docs.border",
        width: "100%",
        maxWidth: "360px",
        minHeight: "360px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "16px",
        backgroundColor: "docs.switch",
      }}>
      <div>
        <Icon />
        <h1
          sx={{
            mt: "24px",
            mb: "16px",
            fontSize: "22px",
            lineHeight: "28px",
            color: "docs.text",
            fontWeight: "bold",
          }}>
          {title}
        </h1>
        <p sx={{ fontSize: "14px", lineHeight: "24px", color: "docs.text" }}>
          Check how livepeer helps you develop video applications easily.
        </p>
      </div>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <p
          sx={{ color: "docs.secondary", fontSize: "14px", fontWeight: "600" }}>
          Start
        </p>
        <Link href="">
          <a>
            <Arrow color={colorMode === "dark" ? "white" : "#3F3FE2"} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DocsCard;
