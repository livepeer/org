/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DURATION } from "lib/animations"

type Props = {
  pushSx?: SxStyleProp
}

const NetworkSvg = ({ pushSx }: Props) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const pathInner = document.querySelector(".path--inner")
    const pathOuter = document.querySelector(".path--outer")
    const pathGreen = document.querySelector(".path--green")
    const circles = document.querySelectorAll(".path--circle")
    const dotInner = document.querySelector(".dot--inner")
    const dotOuter = document.querySelector(".dot--outer")

    if (
      !svgRef.current ||
      !pathInner ||
      !pathOuter ||
      !pathGreen ||
      !circles ||
      !dotInner ||
      !dotOuter
    ) {
      return
    }

    const tl = gsap.timeline({
      delay: DURATION,
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%"
      }
    })

    tl.set([dotInner, dotOuter], { autoAlpha: 0 })
    tl.set([pathInner, pathOuter, circles], { autoAlpha: 0 })
    tl.set([pathGreen], { drawSVG: false })

    tl.to(svgRef.current, { autoAlpha: 1, duration: DURATION * 0.5 })
    tl.to(
      [pathInner, pathOuter, circles],
      {
        delay: DURATION,
        autoAlpha: 1,
        duration: DURATION,
        ease: "sine.out",
        stagger: {
          each: 0.1,
          from: "start"
        }
      },
      "<"
    )
    tl.to(dotInner, {
      duration: DURATION * 18,
      immediateRender: true,
      overwrite: true,
      ease: "none",
      motionPath: {
        path: ".path--inner",
        align: ".path--inner",
        alignOrigin: [0.5, 0.5]
      },
      stagger: {
        repeat: -1
      }
    })
    tl.to(
      dotOuter,
      {
        duration: DURATION * 20,
        immediateRender: true,
        overwrite: true,
        ease: "none",
        motionPath: {
          path: ".path--outer",
          align: ".path--outer",
          alignOrigin: [0.5, 0.5]
        },
        stagger: {
          repeat: -1
        }
      },
      "<"
    )
    tl.to(
      [dotInner, dotOuter],
      {
        delay: DURATION * 0.5,
        autoAlpha: 1,
        duration: DURATION,
        ease: "sine.out"
      },
      "<"
    )

    return () => {
      tl.kill()
    }
  }, [svgRef])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 464 464"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ width: "464px", ...pushSx }}
      className="c--hide"
    >
      <path
        className="path--inner"
        d="M304 232c0 39.765-32.235 72-72 72s-72-32.235-72-72 32.235-72 72-72 72 32.235 72 72z"
        sx={{ stroke: "primary" }}
      />
      <path
        className="path--outer"
        opacity="0.8"
        d="M120,232a112,112 0 1,0 224,0a112,112 0 1,0 -224,0"
        sx={{ stroke: "#E7E7E7" }}
      />
      <path
        className="path--green"
        d="M120 232C120 170.144 170.144 120 232 120"
        sx={{ stroke: "primary" }}
      />
      <path
        className="path--circle"
        opacity="0.6"
        d="M80.5,232a151.5,151.5 0 1,0 303,0a151.5,151.5 0 1,0 -303,0"
        sx={{ stroke: "#E7E7E7" }}
      />
      <circle
        className="path--circle"
        opacity="0.4"
        cx="232"
        cy="232"
        r="191.5"
        sx={{ stroke: "#E7E7E7" }}
      />
      <circle
        className="path--circle"
        opacity="0.2"
        cx="232"
        cy="232"
        r="231.5"
        sx={{ stroke: "#E7E7E7" }}
      />
      <path
        className="dot--inner"
        d="M124,130a6,6 0 1,0 12,0a6,6 0 1,0 -12,0"
        sx={{ fill: "primary" }}
      />
      <circle
        className="dot--outer"
        cx="232"
        cy="120"
        r="6"
        sx={{ fill: "primary" }}
      />
      <rect
        x="200"
        y="200"
        width="64"
        height="64"
        rx="32"
        sx={{ fill: "primary" }}
      />
      <path
        d="M232 245.333C239.364 245.333 245.333 239.364 245.333 232C245.333 224.636 239.364 218.667 232 218.667C224.636 218.667 218.667 224.636 218.667 232C218.667 239.364 224.636 245.333 232 245.333Z"
        stroke="#131418"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M218.667 232H245.333"
        stroke="#131418"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M232 218.667C235.335 222.318 237.23 227.056 237.333 232C237.23 236.944 235.335 241.682 232 245.333C228.665 241.682 226.77 236.944 226.667 232C226.77 227.056 228.665 222.318 232 218.667V218.667Z"
        stroke="#131418"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default NetworkSvg
