/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

type Props = {
  pushSx?: SxStyleProp;
};

const BasementIconSvg = ({ pushSx }: Props) => (
  <svg
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: "20px", ...pushSx }}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.991 13.9853C10.991 11.5577 9.71922 9.99935 7.69065 9.99935C5.38933 9.99935 4.14798 11.9174 4.14798 13.5658V14.4947C4.14798 16.263 5.45004 18.0911 7.6602 18.0911C9.62843 18.0911 10.991 16.4729 10.991 13.9853ZM15.2 13.8037C15.2 18.3591 12.6261 21.536 8.59906 21.536C6.35846 21.536 4.93534 20.607 4.11768 19.2284L4.02689 21.3862H0V0.107422H4.14812V8.76871C5.02613 7.48011 6.54004 6.55097 8.75056 6.55097C12.5051 6.55097 15.2 9.15831 15.2 13.8037Z"
      fill="white"
    />
    <rect x="16.8" y="18.3203" width="3.2" height="3.16735" fill="white" />
  </svg>
);

export default BasementIconSvg;
