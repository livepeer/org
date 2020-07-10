/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Caret from "./caret"
import { useEffect, useRef } from "react"

const baseDelay = 500
const letterStagger = 30

type Frame = {
  text: string
  isBold?: boolean
}

export type AnimatedLineProps = {
  frames: Frame[] | null
  withoutTextAnimation?: boolean
  prefix?: React.ReactNode
  delay?: number
  onDone?: () => void
  status?: "queued" | "active" | "done"
  withoutCaret?: boolean
}

const Line = ({
  frames,
  prefix = "~",
  delay = 0,
  withoutCaret,
  withoutTextAnimation,
  onDone,
  status
}: AnimatedLineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    if (status !== "active") return
    // Animation
    if (!containerRef.current || !contentRef.current) return
    if (!frames) {
      onDone?.()
      return
    }
    frames.forEach(({ text, isBold }) => {
      if (withoutTextAnimation) {
        contentRef.current.innerHTML += text
        timeouts.push(setTimeout(() => onDone?.(), delay))
        return
      }
      text.split("").map((letter, i, { length }) => {
        const html = isBold
          ? letter === " " // To fix weird safari bug with spaces in between <b> tags
            ? letter
            : `<b>${letter}</b>`
          : letter
        const time = delay + baseDelay + i * letterStagger
        timeouts.push(
          setTimeout(() => {
            contentRef.current.innerHTML += html
            if (i + 1 === length) onDone?.()
          }, time)
        )
      })
    })

    return () => {
      timeouts.forEach((t) => clearTimeout(t))
    }
  }, [
    containerRef,
    contentRef,
    status,
    frames,
    delay,
    withoutTextAnimation,
    onDone
  ])

  if (status === "queued") return null
  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "center",
        color: "gray"
      }}
    >
      <div>
        {prefix && <span sx={{ mr: 2 }}>{prefix}</span>}
        <span ref={contentRef} sx={{ mr: 2 }} />
        {!withoutCaret && <Caret blink={status === "done"} />}
      </div>
    </Box>
  )
}

export default Line
