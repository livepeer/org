/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

type Props = {
  pushSx?: SxStyleProp;
  isDark?: boolean;
};

const LivepeerIconSvg = ({ pushSx, isDark }: Props) => (
  <svg
    viewBox="0 0 236 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: "246px", ...pushSx }}>
    <mask
      id="livepeer-svg-mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="236"
      height="250">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-6.49391e-06 101.437L-4.53521e-06 146.247L44.2557 146.247L44.2557 101.437L-6.49391e-06 101.437ZM191.008 101.437L191.008 146.247L235.264 146.247L235.264 101.437L191.008 101.437ZM-4.53521e-06 44.8104L-6.49391e-06 0.000442505L44.2557 0.00044057L44.2557 44.8104L-4.53521e-06 44.8104ZM0.00058251 205.19L0.000584468 250L44.2563 250L44.2563 205.19L0.00058251 205.19ZM95.5048 94.3254L95.5048 49.5154L139.761 49.5154L139.761 94.3254L95.5048 94.3254ZM95.5048 153.313L95.5048 198.123L139.761 198.123L139.761 153.313L95.5048 153.313Z"
        fill="black"
      />
    </mask>
    <g mask="url(#livepeer-svg-mask0)">
      <mask
        id="livepeer-svg-mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="-845"
        y="-38"
        width="1465"
        height="300">
        <rect
          x="-844.711"
          y="-37.002"
          width="1464.06"
          height="298.474"
          rx="8"
          fill="#00EB88"
        />
      </mask>
      <g mask="url(#livepeer-svg-mask1)">
        <g filter="url(#livepeer-svg-filter0_d)">
          <rect
            x="-583.127"
            y="-37.002"
            width="1464.06"
            height="298.474"
            rx="8"
            sx={{ fill: isDark ? "text" : "primary" }}
          />
        </g>
        <path
          d="M47.8998 16.4872C10.9996 240.841 -123.368 276.258 -176.021 265.226C-181.861 264.003 -188.301 268.194 -188.301 274.161V352.798C-188.301 356.739 -185.431 360.093 -181.537 360.702L656.524 491.686C661.375 492.444 665.759 488.693 665.759 483.782V387.711C665.759 383.293 662.025 379.716 657.607 379.653C354.492 375.335 307.846 129.555 219.875 -80.2338C130.014 -294.53 69.7784 -116.535 47.8998 16.4872Z"
          fill="url(#livepeer-svg-paint0_linear)"
        />
        <path
          d="M220.505 208.749C183.919 -15.9799 50.7856 -51.6313 -1.56912 -40.6672C-7.42413 -39.441 -13.9019 -43.6395 -13.9019 -49.6216V-128.464C-13.9019 -132.401 -11.038 -135.752 -7.1496 -136.366L824.423 -267.672C829.279 -268.438 833.671 -264.685 833.671 -259.769V-163.418C833.671 -159 829.938 -155.424 825.52 -155.36C524.762 -150.997 478.471 95.4012 391.174 305.721C301.996 520.574 242.217 342.117 220.505 208.749Z"
          fill="url(#livepeer-svg-paint1_linear)"
        />
        <path
          d="M-263.365 -17.3852C-306.312 93.0369 -465.447 108.212 -521.99 101.715C-527.051 101.133 -531.756 104.976 -531.756 110.07V140.02C-531.756 144.233 -528.488 147.725 -524.284 148.002L430.17 211.087C434.786 211.392 438.697 207.73 438.697 203.105V165.151C438.697 160.733 434.955 157.153 430.536 157.129C85.123 155.3 32.1138 37.0536 -67.9525 -63.8615C-170.06 -166.835 -238.505 -81.305 -263.365 -17.3852Z"
          fill="url(#livepeer-svg-paint2_linear)"
        />
        <path
          d="M-317.864 -65.6866C-349.097 154.632 -461.346 192.75 -508.351 183.602C-514.426 182.42 -521.453 186.762 -521.453 192.95V270.791C-521.453 274.659 -518.686 277.972 -514.88 278.662L205.26 409.246C210.17 410.137 214.688 406.364 214.688 401.375V305.537C214.688 301.119 210.964 297.544 206.547 297.459C-53.7173 292.461 -93.916 47.0827 -169.633 -162.408C-247.087 -376.704 -299.006 -198.709 -317.864 -65.6866Z"
          fill="url(#livepeer-svg-paint3_linear)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="livepeer-svg-filter0_d"
        x="-623.127"
        y="-61.002"
        width="1544.06"
        height="378.474"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="20" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="livepeer-svg-paint0_linear"
        x1="279.657"
        y1="-508.445"
        x2="225.127"
        y2="411.246"
        gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.72" />
        <stop offset="1" stopColor="#9BF0E1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="livepeer-svg-paint1_linear"
        x1="450.502"
        y1="735.044"
        x2="395.273"
        y2="-186.969"
        gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.72" />
        <stop offset="1" stopColor="#9BF0E1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="livepeer-svg-paint2_linear"
        x1="-0.0237088"
        y1="-269.625"
        x2="-11.1365"
        y2="173.579"
        gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.72" />
        <stop offset="1" stopColor="#9BF0E1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="livepeer-svg-paint3_linear"
        x1="-118.105"
        y1="-590.619"
        x2="-181.294"
        y2="327.959"
        gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.72" />
        <stop offset="1" stopColor="#9BF0E1" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default LivepeerIconSvg;
