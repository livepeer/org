/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DURATION } from "lib/animations"

type Props = {
  pushSx?: SxStyleProp
}

const HostedApiSvg = ({ pushSx }: Props) => {
  const svgRef = useRef(null)
  useEffect(() => {
    if (!svgRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 70%"
      }
    })

    const circles = document.querySelectorAll(".dots")
    const mainLine = document.querySelectorAll(".main--line")

    tl.set([mainLine, circles], { autoAlpha: 0 })
    tl.to(svgRef.current, { autoAlpha: 1, duration: DURATION * 0.5 })
    tl.to(mainLine, {
      autoAlpha: 1,
      duration: DURATION,
      ease: "sine.out",
      stagger: {
        each: 0.1,
        from: "start"
      }
    })
    tl.to(circles, {
      autoAlpha: 1,
      duration: DURATION,
      ease: "sine.out",
      stagger: {
        each: 0.1,
        from: "start"
      }
    })
  }, [])
  return (
    <svg
      className="c--hide"
      ref={svgRef}
      viewBox="0 0 968 968"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ width: "968px", ...pushSx }}
    >
      <mask
        id="hosted-api-svg-mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="968"
        height="968"
      >
        <circle
          className="main--line"
          cx="484"
          cy="484"
          r="484"
          fill="url(#hosted-api-svg-paint0_radial)"
        />
      </mask>
      <g mask="url(#hosted-api-svg-mask0)">
        <line
          className="main--line"
          x1="19.3536"
          y1="18.1464"
          x2="949.354"
          y2="948.146"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="388.354"
          y1="18.1464"
          x2="1318.35"
          y2="948.146"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="-348.646"
          y1="18.1464"
          x2="581.354"
          y2="948.146"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="949.354"
          y1="18.8536"
          x2="19.3536"
          y2="948.854"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="581.354"
          y1="18.8536"
          x2="-348.646"
          y2="948.854"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="1318.35"
          y1="18.8536"
          x2="388.354"
          y2="948.854"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="212.354"
          y1="18.8536"
          x2="-717.646"
          y2="948.854"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="484.5"
          y1="-72"
          x2="484.5"
          y2="1039"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="300.5"
          y1="-72"
          x2="300.5"
          y2="1039"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="116.5"
          y1="-72"
          x2="116.5"
          y2="1039"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="668.5"
          y1="-72"
          x2="668.5"
          y2="1039"
          stroke="#E5E5E5"
        />
        <line
          className="main--line"
          x1="852.5"
          y1="-72"
          x2="852.5"
          y2="1039"
          stroke="#E5E5E5"
        />
        <g opacity="0.2">
          <circle
            className="dots"
            opacity="0.2"
            cx="669"
            cy="667"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="301"
            cy="667"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="669"
            cy="301"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="301"
            cy="301"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="485"
            cy="484"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="853"
            cy="484"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="117"
            cy="484"
            r="5"
            fill="#131418"
          />
        </g>
        <g opacity="0.2">
          <circle
            className="dots"
            opacity="0.2"
            cx="485"
            cy="851"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="853"
            cy="851"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="117"
            cy="851"
            r="5"
            fill="#131418"
          />
        </g>
        <g opacity="0.2">
          <circle
            className="dots"
            opacity="0.2"
            cx="485"
            cy="114"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="853"
            cy="114"
            r="5"
            fill="#131418"
          />
          <circle
            className="dots"
            opacity="0.2"
            cx="117"
            cy="114"
            r="5"
            fill="#131418"
          />
        </g>
      </g>
      <rect
        className="main--line"
        x="452"
        y="452"
        width="64"
        height="64"
        rx="32"
        fill="#00EB88"
      />
      <path
        className="main--line"
        d="M492 481.333H490.32C489.821 479.401 488.79 477.648 487.345 476.273C485.899 474.897 484.097 473.955 482.143 473.553C480.188 473.15 478.16 473.304 476.289 473.997C474.418 474.69 472.778 475.893 471.557 477.471C470.335 479.049 469.581 480.938 469.38 482.923C469.178 484.908 469.538 486.91 470.417 488.701C471.297 490.493 472.661 492.001 474.355 493.056C476.049 494.11 478.005 494.668 480 494.667H492C493.768 494.667 495.464 493.964 496.714 492.714C497.964 491.464 498.667 489.768 498.667 488C498.667 486.232 497.964 484.536 496.714 483.286C495.464 482.036 493.768 481.333 492 481.333Z"
        stroke="#131418"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        className="main--line"
        x1="667.354"
        y1="300.854"
        x2="505.354"
        y2="462.854"
        stroke="#00EB88"
      />
      <line
        className="main--line"
        x1="668.5"
        y1="299"
        x2="668.5"
        y2="548"
        stroke="#00EB88"
      />
      <circle className="dots" cx="669" cy="300" r="6" fill="#00EB88" />
      <defs>
        <radialGradient
          id="hosted-api-svg-paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(484 484) rotate(90) scale(484)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

const MobileHostedApiSvg = ({ pushSx }: Props) => (
  <svg
    width="376"
    height="376"
    viewBox="0 0 376 376"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={pushSx}
  >
    <mask
      id="mobile-hosted-api-svg-mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="376"
      height="376"
    >
      <rect
        width="376"
        height="376"
        fill="url(#mobile-hosted-api-svg-paint0_radial)"
      />
    </mask>
    <g mask="url(#mobile-hosted-api-svg-mask0)">
      <path
        d="M58.953 316.34L316.34 58.9531M316.34 58.9531L573.727 316.34M316.34 58.9531L58.953 -198.434"
        stroke="#E5E5E5"
      />
      <path
        d="M316.387 58.7736L573.774 -198.613M573.774 -198.613L831.161 58.7736M573.774 -198.613L316.387 -456"
        stroke="#E5E5E5"
      />
      <path
        d="M316.34 316.34L58.9531 58.9528M58.9531 58.9528L316.34 -198.434M58.9531 58.9528L-198.434 316.34"
        stroke="#E5E5E5"
      />
      <path d="M187.5 -70V402.5" stroke="#E5E5E5" />
      <path d="M316 -70V402.5" stroke="#E5E5E5" />
    </g>
    <rect x="156" y="156" width="64" height="64" rx="32" fill="#00EB88" />
    <path
      d="M196 185.333H194.32C193.821 183.401 192.79 181.648 191.345 180.272C189.899 178.897 188.097 177.954 186.143 177.552C184.188 177.15 182.16 177.304 180.289 177.996C178.418 178.689 176.778 179.893 175.557 181.471C174.335 183.049 173.581 184.938 173.38 186.923C173.178 188.908 173.538 190.91 174.417 192.701C175.297 194.492 176.661 196.001 178.355 197.055C180.049 198.11 182.005 198.668 184 198.666H196C197.768 198.666 199.464 197.964 200.714 196.714C201.964 195.463 202.667 193.768 202.667 192C202.667 190.232 201.964 188.536 200.714 187.286C199.464 186.035 197.768 185.333 196 185.333Z"
      stroke="#131418"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient
        id="mobile-hosted-api-svg-paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(188 188) rotate(90) scale(188)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
)

export default HostedApiSvg
export { MobileHostedApiSvg }
