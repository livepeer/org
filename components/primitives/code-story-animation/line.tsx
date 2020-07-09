/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Caret from "./caret"
import { keyframes } from "@emotion/core"
import { Children } from "react"

const appear = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const caretDisappear = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0, position: "absolute" }
})

type Props = {
  delay?: number
  prefix?: React.ReactNode
}

const baseDelay = 500
const letterStagger = 60

const Line: React.FC<Props> = ({ children, prefix = "~", delay = 0 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: 0,
        animation: `${appear} 0s ${delay}ms forwards`
      }}
    >
      <span sx={{ mr: 2, color: "gray" }}>{prefix}</span>
      {Children.map(children, (child) => {
        if (typeof child === "string") {
          return child.split("").map((letter, i, { length }) => (
            <span
              className="letter"
              sx={{
                variant: "layout.flexCenter",
                opacity: 0,
                animation: `${appear} 0s ${
                  delay + baseDelay + i * letterStagger
                }ms forwards`
              }}
            >
              {letter === " " ? <>&nbsp;</> : letter}
              <Caret
                pushSx={{
                  ml: 1,
                  animation:
                    i + 1 < length
                      ? `${caretDisappear} 0s ${
                          delay + baseDelay + i * letterStagger + letterStagger
                        }ms forwards`
                      : "none"
                }}
              />
            </span>
          ))
        }
        return (
          <span
            className="letter"
            sx={{
              opacity: 0,
              animation: `${appear} 0s ${1000}ms forwards`
            }}
          >
            {child}
            <Caret
              pushSx={{
                animation: `${caretDisappear} 0s ${
                  delay + baseDelay + letterStagger
                }ms forwards`
              }}
            />
          </span>
        )
      })}
    </Box>
  )
}

export default Line
