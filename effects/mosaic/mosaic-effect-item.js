import * as THREE from "three"
import gsap from "gsap"

export default class MosaicEffectItem extends THREE.Mesh {
  constructor(src) {
    const geometry = new THREE.PlaneBufferGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({ transparent: true })
    super(geometry, material)

    this.src = src

    this.init()
  }

  appear() {
    gsap.from(this.material, {
      opacity: 0,
      duration: 5,
      ease: "expo.out"
    })
  }

  init() {
    this.initVideoTexture()
  }

  initVideoTexture() {
    this.video = document.createElement("video")
    this.video.crossOrigin = "anonymous"
    this.video.src = this.src
    this.video.loop = true
    this.video.playsinline = true
    this.video.muted = true
    this.video.addEventListener("loadedmetadata", this.onVideoLoaded.bind(this))
    this.video.play()

    this.texture = new THREE.VideoTexture(this.video)
    this.texture.format = THREE.RGBFormat

    this.material.map = this.texture

    this.material.needsUpdate = true
  }

  onVideoLoaded() {
    this.ratio = this.video.videoWidth / this.video.videoHeight
    this.scale.x = this.ratio
  }

  destroy() {
    this.texture.dispose()
    this.geometry.dispose()
    this.material.dispose()

    this.video.pause()
    this.video.removeAttribute("src")
    this.video.load()
  }
}
