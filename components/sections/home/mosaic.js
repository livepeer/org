import { useEffect, useRef } from "react"

import useWebGL from "effects/mosaic/hooks/use-webgl"
import useRAF from "effects/mosaic/hooks/use-raf"
import MosaicEffect from "effects/mosaic/mosaic-effect"

export default function Mosaic() {
  const ref = useRef(null)

  useEffect(() => {
    const { canvas, scene, camera } = useWebGL()
    const RAF = useRAF()

    ref.current.appendChild(canvas)

    const mosaicEffect = new MosaicEffect([
      "https://vod-progressive.akamaized.net/exp=1594775909~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F503%2F16%2F402519529%2F1720284691.mp4~hmac=68b1b45dc57311ede3c4f413d83c275cdb018e820822dd6f9cc4dc7138350af9/vimeo-prod-skyfire-std-us/01/503/16/402519529/1720284691.mp4?filename=mosaic-video-05.mp4",
      "https://vod-progressive.akamaized.net/exp=1594775949~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F503%2F16%2F402519561%2F1720284872.mp4~hmac=d517eb06ba63445845282cadec2036639b49c5ea6e0cd4916c853ee00277e59e/vimeo-prod-skyfire-std-us/01/503/16/402519561/1720284872.mp4?filename=mosaic-video-06.mp4"
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
    <div ref={ref} className="heroMosaic">
      <style jsx>
        {`
          .heroMosaic {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
          }
        `}
      </style>
    </div>
  )
}
