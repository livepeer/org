/** @jsx jsx */
import { jsx, Box, Text, BoxProps, SxStyleProp } from "theme-ui";

export type ListItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  gap?: string | number | string[];
  pushSx?: SxStyleProp;
} & BoxProps;

const ListItem: React.FC<ListItemProps> = ({
  icon,
  children,
  pushSx,
  gap = 4,
  ...moreProps
}) => (
  <Box sx={{ display: "flex", ...pushSx }} {...moreProps}>
    <i
      sx={{
        color: "primary",
        fontSize: 5,
        width: "24px",
        height: "24px",
        mr: gap,
        variant: "layout.flexCenter",
      }}>
      {icon}
    </i>
    <Text variant="normal" sx={{ maxWidth: "35ch" }}>
      {children}
    </Text>
  </Box>
);

export default ListItem;
