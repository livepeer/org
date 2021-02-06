import { Box } from "theme-ui";

const Dot = ({ bg }: { bg: "#FF4A4A" | "#FFB83D" | "#00C543" }) => (
  <Box
    className="dot"
    sx={{
      bg,
      width: 3,
      height: 3,
      borderRadius: "full",
      display: "inline-block",
    }}
  />
);

const WindowDots = () => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: 3,
      transform: "translateY(-50%)",
      ".dot:not(:last-of-type)": { mr: 2 },
    }}>
    <Dot bg="#FF4A4A" />
    <Dot bg="#FFB83D" />
    <Dot bg="#00C543" />
  </Box>
);

export default WindowDots;
