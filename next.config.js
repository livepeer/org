const { i18n } = require("./next-i18next.config");
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/DrawSVGPlugin",
  "gsap/MotionPathPlugin",
  "gsap/ScrollTrigger",
  "gsap/SplitText",
  "react-use-mailchimp",
  "react-syntax-highlighter",
  "@radix-ui/themes",
]);

module.exports = withPlugins([
  withSvgr,
  [
    {
      images: {
        domains: [
          "assets.vercel.com",
          "cdn.sanity.io",
          "res.cloudinary.com",
          "user-images.githubusercontent.com",
          "i.imgur.com",
          "placehold.co",
        ],
      },
      pageExtensions: ["mdx", "tsx"],
      webpack(config, _options) {
        config.module.rules.push({
          test: /\.mjs/,
          include: /node_modules/,
          type: "javascript/auto",
        });
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        });
        config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader",
        });
        return config;
      },
      async rewrites() {
        return [
          {
            source: "/tv",
            destination: "https://streameth.org/livepeertv",
          },
          {
            source: "/tv/:path*",
            destination: `https://streameth.org/livepeertv/:path*`,
          },
          {
            source: '/tv/:path*',
            destination: `https://streameth.org/livepeertv/:path*`
          }
        ];
      },
      async redirects() {
        return [
          {
            source: "/docs/:slug*",
            destination: "https://docs.livepeer.org/:slug*",
            permanent: false,
          },
          {
            source: "/jobs/technical-writer",
            destination: "https://livepeer.org/jobs/1496366",
            permanent: false,
          },
          {
            source: "/jobs/full-stack-video-engineer",
            destination: "https://livepeer.org/jobs/1412799",
            permanent: false,
          },
          {
            source: "/jobs/operations-manager",
            destination: "https://livepeer.org/jobs/1466566",
            permanent: false,
          },
          {
            source: "/jobs/video-developer-community-manager",
            destination: "https://livepeer.org/jobs/1476601",
            permanent: false,
          },
          {
            source: "/jobs/web3-developer-evangelist",
            destination: "https://livepeer.org/jobs/1491881",
            permanent: false,
          },
          {
            source: "/jobs/chief-operating-officer",
            destination: "https://livepeer.org/jobs/1466562",
            permanent: false,
          },
          {
            source: "/jobs/senior-video-infrastructure-engineer",
            destination: "https://livepeer.org/jobs/1414584",
            permanent: false,
          },
          {
            source: "/jobs/video-developer-success-manager",
            destination: "https://livepeer.org/jobs/1476607",
            permanent: false,
          },
          {
            source: "/jobs/senior-software-engineer-video-transcoding",
            destination: "https://livepeer.org/jobs/1412803",
            permanent: false,
          },
          {
            source: "/jobs/analytics-engineer",
            destination: "https://livepeer.org/jobs/1496262",
            permanent: false,
          },
          {
            source: "/jobs/protocol-engineer",
            destination: "https://livepeer.org/jobs/1412804",
            permanent: false,
          },
          {
            source: "/jobs/investor-relations-manager",
            destination: "https://livepeer.org/jobs/1454503",
            permanent: false,
          },
          {
            source: "/jobs/senior-product-marketing-manager",
            destination: "https://livepeer.org/jobs/1454194",
            permanent: false,
          },
          {
            source: "/jobs/senior-lead-product-manager",
            destination: "https://livepeer.org/jobs/1454194",
            permanent: false,
          },
          {
            source: "/jobs/content-marketing",
            destination: "https://livepeer.org/jobs/1476609",
            permanent: false,
          },
          {
            source: "/jobs/marketing-manager",
            destination: "https://livepeer.org/jobs/1412808",
            permanent: false,
          },
          {
            source: "/jobs/events-manager",
            destination: "https://livepeer.org/jobs/1454453",
            permanent: false,
          },
          {
            source: "/jobs/engineering-manager-livepeer-core-software",
            destination: "https://livepeer.org/jobs/1478605",
            permanent: false,
          },
          {
            source: "/jobs/technical-product-manager-orchestrator-experience",
            destination: "https://livepeer.org/jobs/1496214",
            permanent: false,
          },
          {
            source: "/changelog",
            destination: "https://livepeer.canny.io/changelog",
            permanent: false,
          },
          {
            source: "/feature-requests",
            destination: "https://livepeer.canny.io/feature-requests",
            permanent: false,
          },
          {
            source: "/faq",
            destination: "https://docs.livepeer.org",
            permanent: false,
          },
          {
            source: "/video-miners",
            destination: "https://livepeer.org/orchestrators",
            permanent: false,
          },
          {
            source: "/tokenholders",
            destination: "https://livepeer.org/delegators",
            permanent: false,
          },
          {
            source: "/ecosystem",
            destination: "https://livepeer.org/ecosystem/showcase",
            permanent: false,
          },
          {
            source: "/pricing",
            destination: "https://livepeer.studio/pricing",
            permanent: false,
          },
          {
            source: "/discord",
            destination: "https://discord.gg/VGSkNK8AA6",
            permanent: false,
          }
        ];
      },
    },
  ],
  withTM,
  { i18n },
]);
