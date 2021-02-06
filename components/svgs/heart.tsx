/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

const HeartSvg = ({ pushSx }: { pushSx?: SxStyleProp }) => (
  <svg
    viewBox="0 0 62 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ display: "inline-block", width: "62px", ...pushSx }}>
    <path
      d="M30.9823 53.7827L4.69823 27.4986C2.60164 25.402 1.20392 22.9645 0.505055 20.1861C-0.176763 17.4077 -0.16825 14.6463 0.530614 11.902C1.22948 9.14062 2.61869 6.73721 4.69823 4.69175C6.82891 2.59516 9.25788 1.20596 11.9852 0.524149C14.7295 -0.174716 17.4653 -0.174716 20.1926 0.524149C22.9369 1.22301 25.3744 2.61221 27.5051 4.69175L30.9823 8.06675L34.4596 4.69175C36.6073 2.61221 39.0448 1.22301 41.7721 0.524149C44.4994 -0.174716 47.2266 -0.174716 49.9539 0.524149C52.6982 1.20596 55.1357 2.59516 57.2664 4.69175C59.346 6.73721 60.7352 9.14062 61.434 11.902C62.1329 14.6463 62.1329 17.4077 61.434 20.1861C60.7522 22.9645 59.363 25.402 57.2664 27.4986L30.9823 53.7827Z"
      fill="url(#heart-svg-paint0_linear)"
    />
    <defs>
      <linearGradient
        id="heart-svg-paint0_linear"
        x1="-14.4961"
        y1="23.4901"
        x2="62.0093"
        y2="53.9765"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A55F" />
        <stop offset="1" stopColor="#4CF1AC" />
      </linearGradient>
    </defs>
  </svg>
);

export default HeartSvg;
