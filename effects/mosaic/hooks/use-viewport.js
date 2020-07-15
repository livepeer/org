import Events from "events"

let viewport

class Viewport {
  constructor() {
    this.events = new Events()
    this.events.setMaxListeners(Infinity)
    window.addEventListener("resize", this.onWindowResize.bind(this), false)
  }

  get width() {
    return window.innerWidth
  }

  get height() {
    return window.innerHeight
  }

  get ratio() {
    return this.width / this.height
  }

  onWindowResize() {
    this.events.emit("resize", this)
  }
}

const useViewport = () => {
  return viewport || (viewport = new Viewport())
}

export default useViewport
