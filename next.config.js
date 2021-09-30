const { i18n } = require('./next-i18next.config');
const withPlugins = require('next-compose-plugins');
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
      async redirects() {
        return [
          {
            source: '/tv',
            destination:
              'https://media.livepeer.org/play?url=https%3A%2F%2Fcdn.livepeer.com%2Fhls%2F83f6hvl1i9noskxb%2Findex.m3u8',
            permanent: false,
          },
        ];
      },
    },
  ],
  withTM,
  { i18n },
]);
