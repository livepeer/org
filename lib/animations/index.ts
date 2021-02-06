import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR * 0.5;

const initGsap = () => {
  gsap.registerEffect({
    name: "textEntrance",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.to(targets, {
        autoAlpha: 1,
        duration: config.duration,
        ease: "sine.out",
        y: 0,
        stagger: {
          each: 0.1,
          from: "start",
        },
      });
    },
    defaults: { duration: DURATION },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "textHide",
    effect: (targets: gsap.TweenTarget) => {
      return gsap.set(targets, { y: 100, autoAlpha: 0 });
    },
    extendTimeline: false,
  });

  gsap.registerEffect({
    name: "sectionEntrance",
    effect: (
      targets: gsap.TweenTarget,
      config: { duration: number; delay: number }
    ) => {
      return gsap.to(targets, {
        autoAlpha: 1,
        duration: config.duration,
        delay: config.delay,
      });
    },
    defaults: { duration: DURATION, delay: 0 },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "sectionHide",
    effect: (targets: gsap.TweenTarget) => {
      return gsap.set(targets, { autoAlpha: 0 });
    },
    extendTimeline: false,
  });

  gsap.registerEffect({
    name: "elementsEntrance",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.fromTo(
        [targets],
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          duration: config.duration,
          ease: "sine.out",
          y: 0,
          stagger: {
            each: 0.2,
            from: "start",
          },
        }
      );
    },
    defaults: { duration: DURATION },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "elementsFadeIn",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.fromTo(
        [targets],
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: config.duration,
          ease: "sine.out",
        }
      );
    },
    defaults: { duration: DURATION },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "svgHide",
    effect: (targets: gsap.TweenTarget) => {
      return gsap.set(targets, { drawSVG: false });
    },
    extendTimeline: false,
  });

  gsap.registerEffect({
    name: "svgDraw",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.to(targets, {
        drawSVG: true,
        duration: config.duration,
      });
    },
    defaults: { duration: DURATION },
    extendTimeline: true,
  });
};

export default initGsap;
export { DURATION };
