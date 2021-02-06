import { gsap } from "gsap";
import { DURATION } from ".";

const sectionEffect = (elem: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
    },
  });
  tl.set(elem, {
    autoAlpha: 0,
  });
  // @ts-ignore
  tl.sectionEntrance(elem, {
    delay: DURATION * 2,
  });
};

export default sectionEffect;
