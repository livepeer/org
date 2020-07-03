/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"

type Props = {
  pushSx?: SxStyleProp
}

const NetworkSvg = ({ pushSx }: Props) => (
  <svg
    width="464"
    height="464"
    viewBox="0 0 464 464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={pushSx}
  >
    <circle cx="232" cy="232" r="71.5" sx={{ stroke: "primary" }} />
    <circle opacity="0.8" cx="232" cy="232" r="111.5" sx={{ stroke: "gray" }} />
    <path
      d="M120 232C120 170.144 170.144 120 232 120"
      sx={{ stroke: "primary" }}
    />
    <circle opacity="0.6" cx="232" cy="232" r="151.5" sx={{ stroke: "gray" }} />
    <circle opacity="0.4" cx="232" cy="232" r="191.5" sx={{ stroke: "gray" }} />
    <circle opacity="0.2" cx="232" cy="232" r="231.5" sx={{ stroke: "gray" }} />
    <circle cx="290" cy="190" r="6" sx={{ fill: "primary" }} />
    <circle cx="232" cy="120" r="6" sx={{ fill: "primary" }} />
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

export default NetworkSvg
