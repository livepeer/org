/** @jsx jsx */
import { jsx } from "theme-ui"

const PrefooterSvg = ({ fill = "white" }) => (
  <svg
    width="655"
    height="365"
    viewBox="0 0 655 365"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="c-animate">
      <path
        filter="url(#prefooter-svg-filter0_i)"
        opacity="0.5"
        d="M320.759 101.182L18.1499 222.508C11.5046 225.173 11.4377 234.556 18.0444 237.316L320.671 363.725C322.626 364.541 324.825 364.549 326.785 363.747L635.552 237.338C642.228 234.605 642.161 225.127 635.446 222.489L326.662 101.161C324.764 100.415 322.652 100.423 320.759 101.182Z"
        sx={{ fill }}
      />
    </g>
    <g className="c-animate">
      <path
        opacity="0.3"
        filter="url(#prefooter-svg-filter1_bi)"
        d="M321.633 51.1853L56.1097 157.818C49.4699 160.484 49.4026 169.86 56.0033 172.622L321.531 283.721C323.489 284.54 325.691 284.548 327.654 283.743L598.581 172.644C605.251 169.908 605.184 160.438 598.475 157.798L327.544 51.1649C325.643 50.4168 323.528 50.4241 321.633 51.1853Z"
        sx={{ fill }}
      />
    </g>
    <g className="c-animate">
      <path
        opacity="0.5"
        filter="url(#prefooter-svg-filter2_bi)"
        d="M322.005 1.19448L94.0242 93.1297C87.3987 95.8015 87.3313 105.157 93.9176 107.925L321.903 203.711C323.866 204.536 326.078 204.544 328.047 203.733L560.667 107.947C567.323 105.206 567.256 95.7554 560.561 93.1096L327.937 1.1739C326.03 0.42022 323.907 0.427593 322.005 1.19448Z"
        sx={{ fill }}
      />
    </g>
    <defs>
      <filter
        id="prefooter-svg-filter0_i"
        x="13.1274"
        y="100.607"
        width="627.393"
        height="263.736"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
      <filter
        id="prefooter-svg-filter1_bi"
        x="11.0911"
        y="10.6091"
        width="632.454"
        height="313.732"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </filter>
      <filter
        id="prefooter-svg-filter2_bi"
        x="49.0162"
        y="-39.386"
        width="556.605"
        height="283.722"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </filter>
    </defs>
  </svg>
)

export default PrefooterSvg
