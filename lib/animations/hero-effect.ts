import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

const heroEffect = (elem: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem
    }
  })
  tl.set(elem, {
    autoAlpha: 0
  })

  const items = elem.querySelectorAll(".h-animate")
  const elements = elem.querySelectorAll(".c-animate")
  const icon = elem.querySelectorAll(".i-animate")

  const split = new SplitText(items, { type: "lines" })

  // Set overflow text
  tl.set([items], { overflow: "hidden" })
  tl.add(gsap.effects.sectionHide(elem))
  tl.add(gsap.effects.textHide([split.lines]))
  //@ts-ignore
  tl.sectionEntrance(elem)
  //@ts-ignore
  tl.elementsEntrance([icon])
  //@ts-ignore
  tl.textEntrance([split.lines])
  //@ts-ignore
  tl.elementsEntrance([elements])
}

export default heroEffect
