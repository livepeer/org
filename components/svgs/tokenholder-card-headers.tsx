/** @jsx jsx */
import { jsx } from "theme-ui";

const GetTokenSvg = () => (
  <svg
    viewBox="0 0 464 464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: "464px" }}>
    <circle opacity="0.1" cx="232" cy="232" r="71.5" stroke="#666666" />
    <circle opacity="0.1" cx="232" cy="232" r="111.5" stroke="#666666" />
    <circle opacity="0.1" cx="232" cy="232" r="151.5" stroke="#666666" />
    <circle opacity="0.1" cx="232" cy="232" r="191.5" stroke="#666666" />
    <circle opacity="0.1" cx="232" cy="232" r="231.5" stroke="#666666" />
    <rect x="200" y="200" width="64" height="64" rx="32" fill="#3F3FE2" />
    <path
      d="M239 231H225C223.895 231 223 231.895 223 233V240C223 241.105 223.895 242 225 242H239C240.105 242 241 241.105 241 240V233C241 231.895 240.105 231 239 231Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M227 231V227C227 225.674 227.527 224.402 228.464 223.464C229.402 222.527 230.674 222 232 222C233.326 222 234.598 222.527 235.536 223.464C236.473 224.402 237 225.674 237 227V231"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StakeTokenSvg = () => (
  <svg
    viewBox="0 0 464 464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: "464px" }}>
    <g opacity="0.25">
      <path
        opacity="0.25"
        d="M99.5 60.5H174.5V135.5H99.5V60.5Z"
        stroke="#666666"
      />
      <path
        opacity="0.25"
        d="M99.5 194.5H174.5V269.5H99.5V194.5Z"
        stroke="#666666"
      />
      <path
        opacity="0.25"
        d="M386.5 194.5H461.5V269.5H386.5V194.5Z"
        stroke="#666666"
      />
      <path
        opacity="0.25"
        d="M99.5 328.5H174.5V403.5H99.5V328.5Z"
        stroke="#666666"
      />
      <path
        opacity="0.25"
        d="M252.5 117.5H327.5V193.5H252.5V117.5Z"
        stroke="#666666"
      />
      <path
        opacity="0.25"
        d="M252.5 270.5H327.5V346.5H252.5V270.5Z"
        stroke="#666666"
      />
    </g>
    <rect x="200" y="200" width="64" height="64" rx="32" fill="#00EB88" />
    <path d="M227 221H222V226H227V221Z" fill="#231F20" />
    <path d="M227 230H222V235H227V230Z" fill="#231F20" />
    <path d="M245 230H240V235H245V230Z" fill="#231F20" />
    <path d="M227 239H222V244H227V239Z" fill="#231F20" />
    <path d="M236 225H231V230H236V225Z" fill="#231F20" />
    <path d="M236 234H231V239H236V234Z" fill="#231F20" />
  </svg>
);

export { GetTokenSvg, StakeTokenSvg };
