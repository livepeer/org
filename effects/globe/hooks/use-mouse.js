import Events from "events"
import * as THREE from "three"
import useViewport from "./use-viewport"

let mouse

class Mouse {
  constructor() {
    this.events = new Events()
    this.events.setMaxListeners(Infinity)

    this.hasMoved = false
    this.position = new THREE.Vector2(-1000, -1000)

    window.addEventListener("mousemove", this.onMouseMove.bind(this), false)
  }

  get normalizedPosition() {
    const viewport = useViewport() // eslint-disable-line
    return new THREE.Vector2(
      (this.position.x / viewport.width) * 2 - 1,
      -(this.position.y / viewport.height) * 2 + 1
    )
  }

  onMouseMove(event) {
    this.hasMoved = true

    const e = event.targetTouches ? event.targetTouches[0] : event
    const { x, y } = e

    this.position.set(x, y)

    this.events.emit("move", this)
  }
}

const useMouse = () => {
  return mouse || (mouse = new Mouse())
}

export default useMouse
