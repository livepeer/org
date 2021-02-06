const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withSvgr = require('next-svgr');
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/DrawSVGPlugin',
  'gsap/MotionPathPlugin',
  'gsap/ScrollTrigger',
  'gsap/SplitText',
  'react-use-mailchimp',
]);

module.exports = withPlugins([
  withSvgr,
  [
    withMDX,
    {
      images: {
        domains: ['assets.vercel.com', 'cdn.sanity.io'],
      },
      pageExtensions: ['mdx', 'tsx'],
      webpack(config, _options) {
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        });
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return config;
      },
    },
  ],
  withTM,
]);
