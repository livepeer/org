import { gsap } from "gsap";

const heroEffect = (elem: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
    },
  });
  tl.set(elem, {
    autoAlpha: 0,
  });

  const items = elem.querySelectorAll(".h-animate");
  const elements = elem.querySelectorAll(".c-animate");

  tl.set([items], { autoAlpha: 0 });
  tl.add(gsap.effects.sectionHide(elem));
  //@ts-ignore
  tl.sectionEntrance(elem);
  //@ts-ignore
  tl.elementsFadeIn([items]);
  //@ts-ignore
  tl.elementsEntrance([elements], "<");
};

export default heroEffect;
