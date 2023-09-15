/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import Link from "next/link";
import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { DURATION } from "lib/animations";

type Props = {
  pushSx?: SxStyleProp;
  isDark?: boolean;
  isLink?: boolean;
  disableHover?: boolean;
  id?: string;
};

const LivepeerLogo = ({
  pushSx,
  isDark,
  isLink = true,
  disableHover = false,
  id = "",
}: Props) => {
  const [hover, setHover] = useState(false);
  const svgRef = useRef(null);

  const handleMouseOver = useCallback(() => setHover(true), []);
  const handleMouseOut = useCallback(() => setHover(false), []);

  useEffect(() => {
    const node = svgRef.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [handleMouseOut, handleMouseOver, svgRef]);

  useEffect(() => {
    if (!svgRef.current) return;

    const words = svgRef.current.querySelectorAll(".w-animate");
    const color1 = svgRef.current.querySelector(".w-color-1");
    const color2 = svgRef.current.querySelector(".w-color-2");
    const hexDark = isDark ? "#fff" : "#131418";
    const hexHover1 = isDark ? "#fefefe" : "#1f2027";
    const hexHover2 = isDark ? "#ffffff" : "#131418";

    gsap.to(color1, {
      duration: DURATION,
      ease: "sine.inOut",
      attr: {
        "stop-color": hover ? hexHover1 : isDark ? "#ffffff" : "#131418",
      },
    });

    gsap.to(color2, {
      duration: DURATION,
      ease: "sine.inOut",
      attr: {
        "stop-color": hover ? hexHover2 : isDark ? "#ffffff" : "#131418",
      },
    });

    gsap.to(words, {
      duration: DURATION,
      fill: hover ? (disableHover ? "#131418" : "#3CB179") : hexDark,
      stagger: {
        each: 0.03,
        from: "end",
        ease: "sine.inOut",
      },
    });
  }, [disableHover, hover, isDark, svgRef]);

  const markup = useMemo(
    () => (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 697 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M112.554 91.0591V0.988778H129.89V75.6077H180.703V91.0591H112.554ZM187.148 91.0591V0.988778H204.483V91.0591H187.148ZM280.773 0.988778H299.805L266.076 91.0591H243.589L209.106 0.988778H228.515L255.209 72.844L280.773 0.988778ZM304.804 91.0591V0.988778H372.954V16.4402H322.14V37.1676H365.228V52.619H322.14V75.6077H374.273V91.0591H304.804ZM383.418 91.0591V0.988778H423.931C441.455 0.988778 452.887 11.4781 452.887 29.3163C452.887 47.1545 441.455 57.7695 423.931 57.7695H400.754V91.0591H383.418ZM400.754 42.3181H421.984C430.777 42.3181 435.488 37.2933 435.488 29.3163C435.488 21.3394 430.777 16.4402 421.984 16.4402H400.754V42.3181ZM460.901 91.0591V0.988778H529.051V16.4402H478.237V37.1676H521.325V52.619H478.237V75.6077H530.37V91.0591H460.901ZM539.515 91.0591V0.988778H607.664V16.4402H556.851V37.1676H599.939V52.619H556.851V75.6077H608.983V91.0591H539.515ZM618.129 91.0591V0.988778H659.96C675.035 0.800346 687.911 11.6038 687.597 25.4849C687.597 36.9792 682.572 44.3909 672.271 48.2223C681.63 48.2223 686.278 52.4934 686.278 60.9728V91.0591H668.942V65.3068C668.942 58.8373 667.058 56.953 660.588 56.953H635.464V91.0591H618.129ZM635.464 41.8156H654.81C664.922 41.8156 670.198 37.2933 670.198 28.8138C670.198 20.5229 665.111 16.4402 654.81 16.4402H635.464V41.8156Z"
          fill={isDark ? "white" : "black"}
        />
        <rect
          y="90.693"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 0 90.693)"
          fill={isDark ? "white" : "black"}
        />
        <rect
          x="29.1172"
          y="72.2867"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 29.1172 72.2867)"
          fill={isDark ? "white" : "black"}
        />
        <rect
          x="0.0742188"
          y="53.8043"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 0.0742188 53.8043)"
          fill={isDark ? "white" : "black"}
        />
        <rect
          x="58.1582"
          y="53.8043"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 58.1582 53.8043)"
          fill={isDark ? "white" : "black"}
        />
        <rect
          x="29.1172"
          y="35.3199"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 29.1172 35.3199)"
          fill={isDark ? "white" : "black"}
        />
        <rect
          x="0.0742188"
          y="16.8414"
          width="15.8414"
          height="15.8414"
          transform="rotate(-90 0.0742188 16.8414)"
          fill={isDark ? "white" : "black"}
        />
      </svg>
    ),
    [pushSx, isDark, id, disableHover]
  );

  if (!isLink) return markup;
  return (
    <Link href="/" passHref>
      <a aria-label="logo">{markup}</a>
    </Link>
  );
};

export default LivepeerLogo;
