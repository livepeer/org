/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useRef } from "react"
import gsap, { Linear } from "gsap"

import styles from "./globe-dots.module.css"

const GlobeDots = ({ top, left, image, pulsating }) => {
  const pulseRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!pulseRef.current) return
    const targets = pulseRef.current.children

    if (targets) {
      gsap.set(targets, { scale: 0 })
      const delay = 2 / targets.length

      for (let i = 0; i < targets.length; i++) {
        const tl = gsap.timeline({ delay: delay * i, repeat: -1 })
        tl.to(targets[i], 2, { scale: 3, autoAlpha: 0, ease: Linear.easeOut })
      }
    }
  }, [pulsating])

  return (
    <span
      className="highlight-dot"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        width: ["10vw", "2.778vw"],
        height: ["10vw", "2.778vw"],
        borderRadius: "50%",
        position: "absolute",
        userSelect: "none",
        top,
        left
      }}
    >
      {image && (
        <img sx={{ width: "100%", objectFit: "cover" }} src={image} alt="" />
      )}
      {pulsating && (
        <span
          ref={pulseRef}
          className="pulsating-items"
          sx={{ width: ["15vw", "5vw"], height: ["15vw", "5vw"] }}
        >
          <span
            sx={{ height: ["8vw", "3vw"], width: ["8vw", "3vw"] }}
            className={styles.pulse}
          />
          <span
            sx={{ height: ["8vw", "3vw"], width: ["8vw", "3vw"] }}
            className={styles.pulse}
          />
          <span
            sx={{ height: ["8vw", "3vw"], width: ["8vw", "3vw"] }}
            className={styles.pulse}
          />
          <span
            sx={{ height: ["8vw", "3vw"], width: ["8vw", "3vw"] }}
            className={styles.pulse}
          />
          <span
            sx={{ height: ["8vw", "3vw"], width: ["8vw", "3vw"] }}
            className={styles.pulse}
          />
        </span>
      )}
    </span>
  )
}

export default GlobeDots
