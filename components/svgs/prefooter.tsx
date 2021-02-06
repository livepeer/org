/** @jsx jsx */
import { gsap } from "gsap";
import { jsx } from "theme-ui";
import { useEffect, useRef } from "react";

const PrefooterSvg = ({ fill = "white" }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const layers = svgRef.current.querySelectorAll(".c-animate");

    if (!svgRef.current || !layers) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
      },
    });

    tl.set([layers], { autoAlpha: 0 });
    //@ts-ignore
    tl.elementsEntrance([layers]);
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      width="655"
      height="365"
      viewBox="0 0 655 365"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g className="c-animate">
        <path
          d="M320.759 101.182L18.1499 222.508C11.5046 225.173 11.4377 234.556 18.0444 237.316L320.671 363.725C322.626 364.541 324.825 364.549 326.785 363.747L635.552 237.338C642.228 234.605 642.161 225.127 635.446 222.489L326.662 101.161C324.764 100.415 322.652 100.423 320.759 101.182Z"
          sx={{ fill, opacity: 0.5, backdropFilter: "blur(40px)" }}
        />
      </g>
      <g className="c-animate">
        <path
          d="M321.633 51.1853L56.1097 157.818C49.4699 160.484 49.4026 169.86 56.0033 172.622L321.531 283.721C323.489 284.54 325.691 284.548 327.654 283.743L598.581 172.644C605.251 169.908 605.184 160.438 598.475 157.798L327.544 51.1649C325.643 50.4168 323.528 50.4241 321.633 51.1853Z"
          sx={{ fill, opacity: 0.35, backdropFilter: "blur(40px)" }}
        />
      </g>
      <g className="c-animate">
        <path
          d="M322.005 1.19448L94.0242 93.1297C87.3987 95.8015 87.3313 105.157 93.9176 107.925L321.903 203.711C323.866 204.536 326.078 204.544 328.047 203.733L560.667 107.947C567.323 105.206 567.256 95.7554 560.561 93.1096L327.937 1.1739C326.03 0.42022 323.907 0.427593 322.005 1.19448Z"
          sx={{ fill, opacity: 0.35, backdropFilter: "blur(40px)" }}
        />
      </g>
    </svg>
  );
};

export default PrefooterSvg;
