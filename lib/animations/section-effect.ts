import { gsap } from "gsap"

const elementEffect = (elem: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      markers: true,
      start: "top 80%"
    }
  })

  const elements = elem.querySelectorAll(".c-animate")

  tl.set(elements, {
    autoAlpha: 0
  })

  //@ts-ignore
  tl.elementsEntrance([elements])
}

export default elementEffect
