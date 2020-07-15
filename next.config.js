const withPlugins = require("next-compose-plugins")
const withMDX = require("@next/mdx")()
const withSvgr = require("next-svgr")
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/DrawSVGPlugin",
  "gsap/MotionPathPlugin",
  "gsap/ScrollTrigger",
  "gsap/SplitText"
])

module.exports = withPlugins([
  withSvgr,
  [withMDX, { pageExtensions: ["mdx", "tsx"] }],
  [
    withTM,
    {
      transpileModules: [
        "gsap",
        "gsap/DrawSVGPlugin",
        "gsap/MotionPathPlugin",
        "gsap/ScrollTrigger",
        "gsap/SplitText"
      ]
    }
  ]
])
