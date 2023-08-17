/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://livepeer.org',
  generateRobotsTxt: true,
  exclude: [
    '/ecosystem',
    '/admin',
    '/en',
    '/es',
    '/ko',
    '/ru',
    '/zh',
    '/en/*',
    '/es/*',
    '/ko/*',
    '/ru/*',
    '/zh/*',
  ],
};
