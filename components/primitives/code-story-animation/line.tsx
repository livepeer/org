/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Caret from "./caret"

const Line: React.FC = ({ children }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <span sx={{ mr: 2, color: "gray" }}>~</span>
      {children}&nbsp;
      <Caret />
    </Box>
  )
}

export default Line
