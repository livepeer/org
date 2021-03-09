/** @jsx jsx */

import { BoxProps, Box, Flex, Text, jsx } from "theme-ui";
import { forwardRef } from "react";
import WindowDots from "components/primitives/window-dots";

const LineNumbers = ({ length = 64 }) => (
  <div sx={{ position: "absolute", left: 4 }}>
    {Array.from({ length }, (_, i) => i).map((n) => (
      <Text
        key={`code-editor-line-number-${n}`}
        sx={{
          color: "lightGray",
          fontSize: 1,
          fontFamily: "mono",
          lineHeight: "24px",
        }}>
        {n}
      </Text>
    ))}
  </div>
);

type TabProps = { label: string; isSelected?: boolean };

const Tab = ({ label, isSelected }: TabProps) => (
  <Box
    sx={{
      height: "100%",
      variant: "layout.flexCenter",
      bg: isSelected ? "muted" : "transparent",
      px: 4,
    }}>
    {label}
  </Box>
);

type Props = BoxProps & {
  tabs: TabProps[];
  withLineNumbers?: boolean;
};

const CodeEditorBox = forwardRef(
  (
    { children, tabs, withLineNumbers, ...props }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <Box {...props} ref={ref} sx={{ overflow: "hidden", ...props.sx }}>
      <div
        sx={{
          position: "relative",
          display: "flex",
          textAlign: "center",
          height: 10,
          alignItems: "center",
          justifyContent: "flex-start",
          color: "gray",
          fontSize: 1,
          bg: "#F0F0F0",
          pl: "88px",
        }}>
        <WindowDots />
        {tabs.map((t) => (
          <Tab key={`window-box-tab-${t.label}`} {...t} />
        ))}
      </div>
      <div
        sx={{
          p: 3,
          pl: withLineNumbers ? 5 : 3,
          position: "relative",
          boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.06)",
          height: "100%",
        }}>
        {withLineNumbers && <LineNumbers />}
        {children}
      </div>
    </Box>
  )
);

export default CodeEditorBox;
