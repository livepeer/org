import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
export const DURATION = RECIPROCAL_GR * 0.9

const initGsap = () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText)

  gsap.registerEffect({
    name: "textEntrance",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.to(targets, {
        autoAlpha: 1,
        duration: config.duration,
        ease: "sine.out",
        y: 0,
        stagger: {
          each: 0.15,
          from: "start"
        }
      })
    },
    defaults: { duration: DURATION },
    extendTimeline: true
  })

  gsap.registerEffect({
    name: "textHide",
    effect: (targets: gsap.TweenTarget) => {
      return gsap.set(targets, { y: 100, autoAlpha: 0 })
    },
    extendTimeline: false
  })

  gsap.registerEffect({
    name: "sectionEntrance",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
      return gsap.to(targets, {
        autoAlpha: 1,
        duration: config.duration
      })
    },
    defaults: { duration: DURATION },
    extendTimeline: true
  })

  gsap.registerEffect({
    name: "sectionHide",
    effect: (targets: gsap.TweenTarget) => {
      return gsap.set(targets, { autoAlpha: 0 })
    },
    extendTimeline: false
  })

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
            from: "start"
          }
        }
      )
    },
    defaults: { duration: DURATION },
    extendTimeline: true
  })
}

export default initGsap
