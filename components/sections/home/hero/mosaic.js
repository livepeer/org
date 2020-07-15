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
      "https://vod-progressive.akamaized.net/exp=1594855173~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F503%2F16%2F402519499%2F1720965098.mp4~hmac=324dc5a9783a7c0d83d8b3591887ce1d195724e53e64b96fd39f94e89a5e4984/vimeo-prod-skyfire-std-us/01/503/16/402519499/1720965098.mp4?filename=mosaic-video-03.mp4",
      "https://vod-progressive.akamaized.net/exp=1594855192~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F503%2F16%2F402519598%2F1720285069.mp4~hmac=f62b5da13c0b453e20393c1f104d523d1b360a54be1270f6cc4686b1e61fb049/vimeo-prod-skyfire-std-us/01/503/16/402519598/1720285069.mp4?filename=mosaic-video-07.mp4"
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
