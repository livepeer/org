import * as THREE from "three"
import MosaicEffectItem from "./mosaic-effect-item"
import useWebGL from "./hooks/use-webgl"
import useMouse from "./hooks/use-mouse"
import gsap from "gsap"

export default class MosaicEffect extends THREE.Object3D {
  constructor(videos) {
    super()
    this.videos = videos
    this.items = new THREE.Group()
    this.add(this.items)

    this.lastPosition = new THREE.Vector3(0, 0, 0)

    this.time = 0

    const mouse = useMouse()
    this.onMouseMoveHandler = this.onMouseMove.bind(this)
    mouse.events.on("move", this.onMouseMoveHandler)
  }

  update({ deltaTime }) {
    const { viewsize } = useWebGL()

    this.items.children.forEach((item) => {
      item.position.z += 0.015

      if (item.position.z > 10) {
        item.destroy()
        this.items.remove(item)
      }
    })

    if (this.time >= 1.5) {
      this.time = 0
    }

    if (this.time === 0) {
      const randomVideo = this.videos[
        Math.floor(this.videos.length * Math.random())
      ]

      const item = new MosaicEffectItem(randomVideo)
      const position = new THREE.Vector2(0, 0)

      position.x = (Math.random() * 2 - 1) * (viewsize.width / 4)
      position.y = (Math.random() * 2 - 1) * (viewsize.height / 4)

      while (
        position.distanceTo(new THREE.Vector2(0, 0)) < viewsize.height * 0.2 ||
        position.distanceTo(this.lastPosition) < viewsize.width * 0.2
      ) {
        position.x = (Math.random() * 2 - 1) * (viewsize.width / 4)
        position.y = (Math.random() * 2 - 1) * (viewsize.height / 4)
      }

      this.lastPosition = position.clone()

      item.position.x = position.x
      item.position.y = position.y
      this.items.add(item)

      item.appear()
    }

    this.time += deltaTime
  }

  onMouseMove(e) {
    gsap.to(this.position, {
      duration: 5,
      ease: "power2.out",
      x: e.normalizedPosition.x * 0.25,
      y: e.normalizedPosition.y * 0.25
    })
  }

  destroy() {
    const mouse = useMouse()
    mouse.events.off("move", this.onMouseMoveHandler)
  }
}
