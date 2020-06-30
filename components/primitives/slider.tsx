/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"
import { keyframes } from "@emotion/core"
import { useCallback, useEffect, useRef } from "react"
import { getPageOffsetLeft } from "lib/document-helpers"

const slide = keyframes`
from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`

type Props = {
  duration?: number
  pushSx?: SxStyleProp
  isFullScreen?: boolean
}

const Slider: React.FC<Props> = ({
  duration = 10,
  children,
  pushSx,
  isFullScreen = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const getChild = useCallback(
    (n: number) => (typeof children === "function" ? children(n) : children),
    []
  )

  useEffect(() => {
    if (isFullScreen && containerRef.current) {
      const offsetLeft = getPageOffsetLeft(containerRef.current)
      containerRef.current.style.left = `-${offsetLeft}px`
    }
  }, [isFullScreen, containerRef])

  return (
    <div
      ref={containerRef}
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: isFullScreen ? "100vw" : "100%",
        ...pushSx
      }}
    >
      <div
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          animation: `${slide} ${duration * 2}s linear infinite`
        }}
      >
        <div
          sx={{
            display: "inline-flex",
            "& > div": { display: "inline-block" }
          }}
        >
          {getChild(1)}
        </div>
        <div
          sx={{
            display: "inline-flex",
            "& > div": { display: "inline-block" }
          }}
        >
          {getChild(2)}
        </div>
      </div>
    </div>
  )
}

export default Slider
