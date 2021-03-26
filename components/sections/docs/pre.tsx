import { Box } from "@theme-ui/components";
import { useColorMode } from "theme-ui";

const Pre = ({ ...props }) => {
  const [colorMode] = useColorMode();
  return (
    <Box
      sx={{
        overflow: "hidden",
        pre: {
          border: "1px solid",
          borderColor: colorMode === "dark" ? "#3E3E3E" : "black",
        },
        ".token.operator": {
          color: "primary",
        },
        ".token.comment": {
          color: "lightGray",
        },
        ".token.number": {
          color: "dark.docs.secondary",
        },
      }}>
      <pre {...props} />
    </Box>
  );
};

export default Pre;
