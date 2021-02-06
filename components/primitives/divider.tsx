/** @jsx jsx */
import { jsx, Box, SxStyleProp } from "theme-ui";

type Props = {
  size?: string | string[];
  isVertical?: boolean;
  isTransparent?: boolean;
  pushSx?: SxStyleProp;
};

const Divider: React.FC<Props> = ({
  size = "8",
  isVertical = false,
  isTransparent = false,
  pushSx,
}) => (
  <Box
    sx={{
      bg: isTransparent ? "transparent" : "ultraLightGray",
      width: isVertical ? "1px" : size,
      height: isVertical ? size : "1px",
      ...pushSx,
    }}
  />
);

export default Divider;
