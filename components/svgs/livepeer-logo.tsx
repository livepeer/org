/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  pushSx?: SxStyleProp;
  isDark?: boolean;
  isLink?: boolean;
  id?: string;
  width?: number;
};

const LivepeerLogoLockup = ({
  width = 144,
  isDark = false,
  isLink = true,
}: Props) => {
  const markup = useMemo(
    () => (
      <svg
        width={width}
        height="auto"
        viewBox="0 0 903 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.59049e-07 19.7065L0 0H19.7065L19.7065 19.7065H8.59049e-07Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M36.167 42.6588L36.167 22.9523H55.8735L55.8735 42.6588H36.167Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M72.3341 65.6111L72.3341 45.9046H92.0406L92.0406 65.6111H72.3341Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M36.167 88.5634L36.167 68.8569H55.8735L55.8735 88.5634H36.167Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M8.59049e-07 111.516L0 91.8092H19.7065L19.7065 111.516H8.59049e-07Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M8.59049e-07 65.6111L0 45.9046H19.7065L19.7065 65.6111H8.59049e-07Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M151.161 111.513V0H172.803V92.3829H236.241V111.513H151.161Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M249.104 111.513V0H270.746V111.513H249.104Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M370.806 0H394.565L352.457 111.513H324.384L281.335 0H305.565L338.891 88.9613L370.806 0Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M405.625 111.513V65.5443H427.267V45.9509H405.625V0H490.704V19.1298H427.267V45.9509H481.059V65.5443H427.267V92.3829H492.351V111.513H405.625Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M508.586 111.513V0H559.163C581.04 0 595.312 11.0088 595.312 32.9847C595.312 52.5083 581.04 65.6612 559.163 65.6612H530.228V111.513H508.586ZM530.228 45.8359H556.732C567.71 45.8359 573.591 40.5685 573.591 32.7529C573.591 24.3396 567.71 19.1298 556.732 19.1298H530.228V45.8359Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M610.135 111.513V65.5443H631.778V45.9509H610.135V0H695.215V19.1298H631.778V45.9509H685.57V65.5443H631.778V92.3829H696.861V111.513H610.135Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M713.096 111.513V65.5443H734.739V45.9509H713.096V0H798.176V19.1298H734.739V45.9509H788.531V65.5443H734.739V92.3829H799.822V111.513H713.096Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M816.057 111.513V0H868.281C888.069 0.00405063 902.783 9.61736 902.783 27.7775C902.783 41.6115 896.51 50.025 883.65 54.7686C895.334 54.7686 901.137 60.0565 901.137 70.5545V111.513H879.494V75.9202C879.494 67.9106 877.142 65.5777 869.065 65.5777H837.7V111.513H816.057ZM837.7 45.9093H861.851C874.476 45.9093 881.063 41.7277 881.063 32.5944C881.063 23.4611 874.711 19.1298 861.851 19.1298H837.7V45.9093Z"
          fill={isDark ? "#fff" : "#181818"}
        />
      </svg>
    ),
    [isDark, width]
  );

  if (!isLink) return markup;
  return (
    <Link href="/" passHref>
      <a aria-label="logo">{markup}</a>
    </Link>
  );
};

export const LivepeerLogomark = ({ width = 50, isDark = false }) => {
  return (
    <svg
      width={width}
      height="auto"
      viewBox="0 0 397 481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.70533e-06 85L0 0H85L85 85H3.70533e-06Z"
        fill={isDark ? "#fff" : "#181818"}
      />
      <path
        d="M156 184L156 99H241L241 184H156Z"
        fill={isDark ? "#fff" : "#181818"}
      />
      <path
        d="M312 283L312 198H397L397 283H312Z"
        fill={isDark ? "#fff" : "#181818"}
      />
      <path
        d="M156 382L156 297H241L241 382H156Z"
        fill={isDark ? "#fff" : "#181818"}
      />
      <path
        d="M3.70533e-06 481L0 396H85L85 481H3.70533e-06Z"
        fill={isDark ? "#fff" : "#181818"}
      />
      <path
        d="M3.70533e-06 283L0 198H85L85 283H3.70533e-06Z"
        fill={isDark ? "#fff" : "#181818"}
      />
    </svg>
  );
};

export const LivepeerLogotype = ({
  width = 144,
  isDark = false,
  isLink = true,
}: Props) => {
  const markup = useMemo(
    () => (
      <svg
        width={width}
        height="auto"
        viewBox="0 0 290 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 43V0H8.3503V35.6234H32.8264V43H0Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M37.7894 43V0H46.1397V43H37.7894Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M84.7459 0H93.9131L77.6663 43H66.8351L50.2253 0H59.574L72.4322 34.304L84.7459 0Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M98.1802 43V25.2743H106.531V17.719H98.1802V0H131.007V7.37657H106.531V17.719H127.285V25.2743H106.531V35.6234H131.642V43H98.1802Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M137.906 43V0H157.42C165.861 0 171.368 4.24505 171.368 12.7191C171.368 20.2476 165.861 25.3194 157.42 25.3194H146.256V43H137.906ZM146.256 17.6746H156.482C160.718 17.6746 162.987 15.6435 162.987 12.6297C162.987 9.38552 160.718 7.37657 156.482 7.37657H146.256V17.6746Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M177.087 43V25.2743H185.437V17.719H177.087V0H209.913V7.37657H185.437V17.719H206.192V25.2743H185.437V35.6234H210.549V43H177.087Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M216.813 43V25.2743H225.163V17.719H216.813V0H249.639V7.37657H225.163V17.719H245.918V25.2743H225.163V35.6234H250.274V43H216.813Z"
          fill={isDark ? "#fff" : "#181818"}
        />
        <path
          d="M256.538 43V0H276.688C284.323 0.00156195 290 3.70852 290 10.7112C290 16.0456 287.58 19.29 282.618 21.1191C287.126 21.1191 289.365 23.1582 289.365 27.2063V43H281.014V29.2753C281.014 26.1868 280.107 25.2872 276.99 25.2872H264.889V43H256.538ZM264.889 17.7029H274.207C279.078 17.7029 281.619 16.0905 281.619 12.5686C281.619 9.04677 279.169 7.37657 274.207 7.37657H264.889V17.7029Z"
          fill={isDark ? "#fff" : "#181818"}
        />
      </svg>
    ),
    [isDark, width]
  );

  if (!isLink) return markup;
  return (
    <Link href="/" passHref>
      <a aria-label="logo">{markup}</a>
    </Link>
  );
};

export default LivepeerLogoLockup;
