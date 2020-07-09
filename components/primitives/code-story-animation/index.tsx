import { Box } from "theme-ui"
import Line from "./line"

const CodeStoryAnimation = () => {
  return (
    <Box sx={{ fontFamily: "mono" }}>
      <Line>Testing this thing</Line>
      <Line delay={3000}>Yay!</Line>
    </Box>
  )
}

export default CodeStoryAnimation
