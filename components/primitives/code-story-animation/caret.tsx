import { Box, SxStyleProp } from "theme-ui";
import { forwardRef } from "react";
import { keyframes } from "@emotion/core";

const blinkKeyframe = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

type Props = {
  blink?: boolean;
  pushSx?: SxStyleProp;
};

const Caret = forwardRef(
  ({ blink, pushSx }: Props, ref: React.RefObject<HTMLDivElement>) => (
    <Box
      ref={ref}
      sx={{
        display: "inline-block",
        userSelect: "none",
        height: 4,
        mb: "-2px",
        width: 2,
        bg: "primary",
        animation: blink ? `${blinkKeyframe} 1s step-end infinite` : "",
        ...pushSx,
      }}
    />
  )
);

export default Caret;
