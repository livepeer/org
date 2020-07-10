import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const sectionEffect = (elem: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem
    },
    onComplete: () => {
      split.revert()
    }
  })
  tl.set(elem, {
    autoAlpha: 0
  })

  const items = elem.querySelectorAll(".h-animate")
  const elements = elem.querySelectorAll(".c-animate")

  const split = new SplitText(items, { type: "lines" })

  // Set overflow text
  tl.set([items], { overflow: "hidden" })
  tl.add(gsap.effects.sectionHide(elem))
  tl.add(gsap.effects.textHide([split.lines]))
  //@ts-ignore
  tl.sectionEntrance(elem)
  //@ts-ignore
  tl.textEntrance([split.lines])
  //@ts-ignore
  tl.elementsEntrance([elements])
}

export default sectionEffect
