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

  const elements = elem.querySelectorAll(".c-animate")
  tl.add(gsap.effects.sectionHide(elem))
  //@ts-ignore
  tl.sectionEntrance(elem)
  //@ts-ignore
  tl.elementsEntrance([elements])
}

export default heroEffect
