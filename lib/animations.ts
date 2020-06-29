import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
export const DURATION = RECIPROCAL_GR * 0.9

gsap.registerEffect({
  name: "textFadeIn",
  effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
    return gsap.to(targets, {
      autoAlpha: 1,
      duration: config.duration,
      ease: "sine.out",
      y: 0,
      stagger: {
        each: 0.1,
        from: "start"
      }
    })
  },
  defaults: { duration: DURATION },
  extendTimeline: true
})

gsap.registerEffect({
  name: "sectionFadeIn",
  effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
    return gsap.to(targets, {
      autoAlpha: 1,
      duration: config.duration * 0.5
    })
  },
  defaults: { duration: DURATION },
  extendTimeline: true
})
