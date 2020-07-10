import { Box } from "theme-ui"
import Line, { AnimatedLineProps } from "./line"
import { useCallback } from "react"

type Props = {
  lines: AnimatedLineProps[]
}

const CodeStoryAnimation = ({ lines }: Props) => {
  const handleDone = useCallback(() => {}, [])

  return (
    <Box
      sx={{
        fontFamily: "mono",
        '.line:not(:last-of-type)[data-done="true"] .caret': { display: "none" }
      }}
    >
      {lines.map((line, i) => (
        <Line
          key={`code-story-animation-line-${i}`}
          {...line}
          onDone={handleDone}
        />
      ))}
    </Box>
  )
}

export default CodeStoryAnimation
