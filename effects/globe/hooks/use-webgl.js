import * as THREE from "three"

import useViewport from "./use-viewport"
import useRAF from "./use-raf.js"

let webgl

class WebGL {
  constructor() {
    const RAF = useRAF() // eslint-disable-line
    const viewport = useViewport() // eslint-disable-line

    // clock
    this.clock = new THREE.Clock()

    // scene
    this.scene = new THREE.Scene()

    // camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      viewport.width / viewport.height
    )

    this.camera.position.z = 550
    this.camera.position.y = 200

    // canvas
    this.canvas = document.createElement("canvas")

    // WEBGL2
    const { WEBGL } = require("three/examples/jsm/WebGL")
    const context = this.canvas.getContext(
      WEBGL.isWebGL2Available() ? "webgl2" : "webgl",
      { alpha: true }
    )

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      context,
      scene: this.scene,
      antialias: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: false
    })
    this.renderer.setSize(viewport.width, viewport.height)
    this.renderer.setPixelRatio(1)

    // events
    window.addEventListener("resize", this.onWindowResize.bind(this))

    // raf
    RAF.add("use-webgl", this.loop.bind(this), 1)
  }

  loop(clock) {
    this.renderer.renderLists.dispose()
    this.renderer.render(this.scene, this.camera)
  }

  get viewsize() {
    const viewport = useViewport() // eslint-disable-line

    let width, height
    if (this.camera.type === "PerspectiveCamera") {
      const distance = this.camera.position.z
      const vFov = (this.camera.fov * Math.PI) / 180
      height = 2 * Math.tan(vFov / 2) * distance
      width = height * viewport.ratio
    } else if (this.camera.type === "OrthographicCamera") {
      width = viewport.width
      height = viewport.height
    }

    return { width, height }
  }

  onWindowResize() {
    const viewport = useViewport() // eslint-disable-line

    this.renderer.setSize(viewport.width, viewport.height)

    if (this.camera.type === "PerspectiveCamera") {
      this.camera.aspect = viewport.width / viewport.height
    } else if (this.camera.type === "OrthographicCamera") {
      this.camera.left = viewport.width / -2
      this.camera.right = viewport.width / 2
      this.camera.top = viewport.height / 2
      this.camera.bottom = viewport.height / -2
    }

    this.camera.updateProjectionMatrix()
  }

  destroy() {}
}

const useWebGL = () => {
  return webgl || (webgl = new WebGL())
}

export default useWebGL
