import * as THREE from "three"

// import Stats from "stats.js"

import useViewport from "../hooks/use-viewport"
import useRAF from "../hooks/use-raf.js"

let webgl

class WebGL {
  constructor() {
    const RAF = useRAF()
    const viewport = useViewport()

    // clock
    this.clock = new THREE.Clock()

    // scene
    this.scene = new THREE.Scene()
    // this.DOMScene = new THREE.Group();
    // this.scene.add(this.DOMScene);

    // camera
    this.camera = new THREE.PerspectiveCamera(
      40,
      viewport.width / viewport.height,
      0.1,
      100000
    )

    this.camera.position.z = 8

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
      scene: this.scene
    })
    this.renderer.setSize(viewport.width, viewport.height)
    this.renderer.setPixelRatio(window.devicePixelRatio || 1)

    // composer
    // const Composer = require("@/webgl/composer").default;
    // this.composer = new Composer({
    //   camera: this.camera,
    //   renderer: this.renderer,
    //   scene: this.scene
    // });

    // stats
    // this.stats = new Stats()
    // document.body.appendChild(this.stats.dom)
    // RAF.add("stats-begin", this.stats.begin, -1000)
    // RAF.add("stats-end", this.stats.end, 1000)

    // raycaster
    // const Raycaster = require("@/webgl/raycaster").default;
    // this.raycaster = new Raycaster(this.camera);

    // events
    window.addEventListener("resize", this.onWindowResize.bind(this))

    // raf
    RAF.add("use-webgl", this.loop.bind(this), 1)
  }

  loop(clock) {
    // this.composer.render(clock);
    this.renderer.renderLists.dispose()
    this.renderer.render(this.scene, this.camera)

    const info = this.renderer.info

    // console.log(
    //   "calls: " + info.render.calls,
    //   "triangle: " + info.render.triangles,
    //   "geometries:" + info.memory.geometries,
    //   "textures:" + info.memory.textures
    // )
  }

  get viewsize() {
    const viewport = useViewport()

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
    const viewport = useViewport()

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

  destroy() {
    const RAF = useRAF()
    // RAF.remove("stats-begin")
    // RAF.remove("stats-end")
    // RAF.remove("use-webgl")
  }
}

const useWebGL = () => {
  return webgl || (webgl = new WebGL())
}

export default useWebGL
