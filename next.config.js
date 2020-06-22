const withPlugins = require("next-compose-plugins")
const withMDX = require("@next/mdx")()
const withSvgr = require("next-svgr")

module.exports = withPlugins([
  withSvgr,
  [withMDX, { pageExtensions: ["js", "mdx"] }]
])
