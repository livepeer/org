import { useEffect, useRef } from "react"

import useWebGL from "effects/mosaic/hooks/use-webgl"
import useRAF from "effects/mosaic/hooks/use-raf"
import MosaicEffect from "effects/mosaic/mosaic-effect"

export default function Mosaic() {
  const ref = useRef(null)

  useEffect(() => {
    const { canvas, scene } = useWebGL()
    const RAF = useRAF()

    ref.current.appendChild(canvas)

    const mosaicEffect = new MosaicEffect([
      "/hero-videos/mixkit-one-on-one-basketball-game-751.mp4"
    ])
    scene.add(mosaicEffect)

    const loop = function (clock) {
      mosaicEffect.update(clock)
    }

    RAF.add("webgl", loop)

    return () => {
      mosaicEffect.destroy()
      scene.remove(mosaicEffect)
      RAF.remove("webgl")
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px"
      }}
    />
  )
}
