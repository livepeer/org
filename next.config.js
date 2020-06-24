const withPlugins = require("next-compose-plugins")
const withMDX = require("@next/mdx")()
const withSvgr = require("next-svgr")
const withTM = require("next-transpile-modules")(["@livepeer/ui"])

module.exports = withPlugins([
  withSvgr,
  [withMDX, { pageExtensions: ["mdx", "tsx"] }],
  withTM
])
