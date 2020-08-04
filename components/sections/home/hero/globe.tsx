/** @jsx jsx */
import { jsx } from "theme-ui"
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import useWebGL from "effects/globe/hooks/use-webgl"
import OrbitControls from "effects/globe/js/OrbitControls"
import coordinates from "effects/globe/points.json"

const globeRadius = 200
const globeWidth = 4098 / 2
const globeHeight = 1968 / 2
const mergedGeometry = new THREE.Geometry()
const pointGeometry = new THREE.SphereGeometry(0.8, 1, 1)
const pointMaterial = new THREE.MeshBasicMaterial({
  color: "#fff",
  transparent: true
})

const coloredMergedGeometry = new THREE.Geometry()
const coloredPointGeometry = new THREE.SphereGeometry(1, 1, 1)
const coloredPointMaterial = new THREE.MeshBasicMaterial({
  color: "#00A55F",
  transparent: true
})

const sphereGeometry = new THREE.SphereGeometry(200, 64, 64)
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: "#ccc",
  transparent: true
})

export default function Globe() {
  const ref = useRef(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return
    setIsInitialized(true)
    const { canvas, scene, camera, renderer } = useWebGL() // eslint-disable-line

    gsap.from([sphereMaterial, pointMaterial, coloredPointMaterial], {
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.25,
      delay: 1
    })

    const convertFlatCoordsToSphereCoords = (x, y) => {
      let latitude = ((x - globeWidth) / globeWidth) * -180
      let longitude = ((y - globeHeight) / globeHeight) * -90
      latitude = (latitude * Math.PI) / 180
      longitude = (longitude * Math.PI) / 180
      const radius = Math.cos(longitude) * globeRadius

      return {
        x: Math.cos(latitude) * radius,
        y: Math.sin(longitude) * globeRadius,
        z: Math.sin(latitude) * radius
      }
    }

    ref.current.appendChild(canvas)

    for (let point of coordinates.points) {
      const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y)
      if (x && y && z) {
        if (gsap.utils.random(0, 100, 2) === 40) {
          coloredPointGeometry.translate(x, y, z)
          coloredMergedGeometry.merge(coloredPointGeometry)
          coloredPointGeometry.translate(-x, -y, -z)
        } else {
          pointGeometry.translate(x, y, z)
          mergedGeometry.merge(pointGeometry)
          pointGeometry.translate(-x, -y, -z)
        }
      }
    }

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    const coloredPoints = new THREE.Mesh(
      coloredMergedGeometry,
      coloredPointMaterial
    )
    scene.add(coloredPoints)

    const globeShape = new THREE.Mesh(mergedGeometry, pointMaterial)
    scene.add(globeShape)

    camera.orbitControls = new OrbitControls(camera, canvas)
    camera.orbitControls.enableKeys = false
    camera.orbitControls.enablePan = false
    camera.orbitControls.enableZoom = false
    camera.orbitControls.enableDamping = false
    camera.orbitControls.enableRotate = false
    camera.orbitControls.autoRotate = true

    const animate = () => {
      camera.orbitControls.update()
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()
  }, [isInitialized])

  return (
    <div
      ref={ref}
      sx={{
        width: "100vw",
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        zIndex: 0
      }}
    />
  )
}
