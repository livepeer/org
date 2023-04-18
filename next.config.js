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
        domains: [
          'assets.vercel.com',
          'cdn.sanity.io',
          'res.cloudinary.com',
          'user-images.githubusercontent.com',
        ],
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
            source: '/docs/:slug*',
            destination: 'https://docs.livepeer.org/:slug*',
            permanent: false,
          },
          {
            source: '/tv',
            destination:
              'https://lvpr.tv/?v=7062iaygm8eip421',
            permanent: false,
          },
          {
            source: '/jobs/technical-writer',
            destination: 'https://livepeer.org/jobs/1496366',
            permanent: false,
          },
          {
            source: '/jobs/full-stack-video-engineer',
            destination: 'https://livepeer.org/jobs/1412799',
            permanent: false,
          },
          {
            source: '/jobs/operations-manager',
            destination: 'https://livepeer.org/jobs/1466566',
            permanent: false,
          },
          {
            source: '/jobs/video-developer-community-manager',
            destination: 'https://livepeer.org/jobs/1476601',
            permanent: false,
          },
          {
            source: '/jobs/web3-developer-evangelist',
            destination: 'https://livepeer.org/jobs/1491881',
            permanent: false,
          },
          {
            source: '/jobs/chief-operating-officer',
            destination: 'https://livepeer.org/jobs/1466562',
            permanent: false,
          },
          {
            source: '/jobs/senior-video-infrastructure-engineer',
            destination: 'https://livepeer.org/jobs/1414584',
            permanent: false,
          },
          {
            source: '/jobs/video-developer-success-manager',
            destination: 'https://livepeer.org/jobs/1476607',
            permanent: false,
          },
          {
            source: '/jobs/senior-software-engineer-video-transcoding',
            destination: 'https://livepeer.org/jobs/1412803',
            permanent: false,
          },
          {
            source: '/jobs/analytics-engineer',
            destination: 'https://livepeer.org/jobs/1496262',
            permanent: false,
          },
          {
            source: '/jobs/protocol-engineer',
            destination: 'https://livepeer.org/jobs/1412804',
            permanent: false,
          },
          {
            source: '/jobs/investor-relations-manager',
            destination: 'https://livepeer.org/jobs/1454503',
            permanent: false,
          },
          {
            source: '/jobs/senior-product-marketing-manager',
            destination: 'https://livepeer.org/jobs/1454194',
            permanent: false,
          },
          {
            source: '/jobs/senior-lead-product-manager',
            destination: 'https://livepeer.org/jobs/1454194',
            permanent: false,
          },
          {
            source: '/jobs/content-marketing',
            destination: 'https://livepeer.org/jobs/1476609',
            permanent: false,
          },
          {
            source: '/jobs/marketing-manager',
            destination: 'https://livepeer.org/jobs/1412808',
            permanent: false,
          },
          {
            source: '/jobs/events-manager',
            destination: 'https://livepeer.org/jobs/1454453',
            permanent: false,
          },
          {
            source: '/jobs/engineering-manager-livepeer-core-software',
            destination: 'https://livepeer.org/jobs/1478605',
            permanent: false,
          },
          {
            source: '/jobs/technical-product-manager-orchestrator-experience',
            destination: 'https://livepeer.org/jobs/1496214',
            permanent: false,
          },
          {
            source: '/changelog',
            destination: 'https://livepeer.canny.io/changelog',
            permanent: false,
          },
          {
            source: '/feature-requests',
            destination: 'https://livepeer.canny.io/feature-requests',
            permanent: false,
          },
          {
            source: '/faq',
            destination: 'https://docs.livepeer.org',
            permanent: false,
          },
          {
            source: '/video-miners',
            destination: 'https://livepeer.org/orchestrators',
            permanent: false,
          },
          {
            source: '/tokenholders',
            destination: 'https://livepeer.org/delegators',
            permanent: false,
          },
          {
            source: '/blog',
            destination: 'https://medium.com/livepeer-blog',
            permanent: false,
          },
          {
            source: '/blog/category/case-study',
            destination: 'https://medium.com/livepeer-blog/tagged/case-study',
            permanent: false,
          },
          {
            source: '/blog/how-lenstube-changed-video-sharing-in-web3',
            destination: 'https://medium.com/livepeer-blog/lenstube-a-decentralized-video-sharing-platform-built-with-lens-and-livepeer-b26e87e923',
            permanent: false,
          },
          {
            source: '/blog/how-the402-crypto-enabled-livestreaming-benefits-creators',
            destination: 'https://medium.com/livepeer-blog/how-hypeshots-crypto-enabled-livestreaming-benefits-creators-5c40c6660b62',
            permanent: false,
          },
          {
            source: '/blog/building-a-web3-bonfire-for-creators',
            destination: 'https://medium.com/livepeer-blog/growing-onchain-communities-with-bonfire-and-livepeer-2135b1fa250c',
            permanent: false,
          },
          {
            source: '/blog/streameth-brings-irl-ethereum-events-online',
            destination: 'https://medium.com/livepeer-blog/streameth-brings-irl-ethereum-events-online-7be3d21472f4',
            permanent: false,
          },
          {
            source: '/blog/why-the-lot-radio-livestreams-24-7-with-livepeer-studio',
            destination: 'https://medium.com/livepeer-blog/why-the-lot-radio-livestreams-24-7-with-livepeer-8896e018db9b',
            permanent: false,
          },
          {
            source: '/blog/spaghetteth-livepeer-studio-stream-hackathon',
            destination: 'https://medium.com/livepeer-blog/how-spaghetteth-used-livepeer-to-stream-its-hackathon-fc56206ff145',
            permanent: false,
          },
          {
            source: '/blog/beem-web3-video-streaming-filmmakers',
            destination: 'https://medium.com/livepeer-blog/how-beem-built-its-video-streaming-platform-with-livepeer-39693523c51',
            permanent: false,
          },
          {
            source: '/blog/how-huddle01-built-the-worlds-first-web3-meeting-app',
            destination: 'https://medium.com/livepeer-blog/how-huddle01-built-the-worlds-first-web3-meeting-app-c4bc24bb16f0',
            permanent: false,
          },
        ];
      },
    },
  ],
  withTM,
  { i18n },
]);
