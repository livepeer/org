/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Caret from "./caret"
import { keyframes } from "@emotion/core"
import { useEffect, useRef, useCallback } from "react"

const baseDelay = 500
const letterStagger = 60

const appear = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

type Frame = {
  text: string
  isBold?: boolean
}

export type AnimatedLineProps = {
  frames: Frame[]
  withoutCaret?: boolean
  withoutTextAnimation?: boolean
  prefix?: React.ReactNode
  delay?: number
  onDone?: () => void
}

const Line = ({
  frames,
  prefix = "~",
  delay = 0,
  withoutCaret,
  withoutTextAnimation,
  onDone
}: AnimatedLineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const play = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return
    frames.forEach(({ text, isBold }) => {
      if (withoutTextAnimation) {
        contentRef.current.innerHTML += text
        setTimeout(() => {
          containerRef.current.dataset.done = "true"
          onDone?.()
        }, delay)
        return
      }
      text.split("").map((letter, i, { length }) => {
        const html = isBold ? `<b>${letter}</b>` : letter
        const time = delay + baseDelay + i * letterStagger
        setTimeout(() => {
          contentRef.current.innerHTML += html
          if (i + 1 === length) {
            containerRef.current.dataset.done = "true"
            onDone?.()
          }
        }, time)
      })
    })
  }, [containerRef, contentRef, frames, delay, withoutTextAnimation, onDone])

  useEffect(play, [play])

  return (
    <Box
      ref={containerRef}
      className="line"
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: 0,
        animation: `${appear} 0s ${delay}ms forwards`,
        color: "gray"
      }}
    >
      <div>
        {prefix && <span sx={{ mr: 2 }}>{prefix}</span>}
        <span ref={contentRef} sx={{ mr: 2 }} />
        {!withoutCaret && <Caret />}
      </div>
    </Box>
  )
}

export default Line
