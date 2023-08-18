/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://livepeer.org',
  generateRobotsTxt: true,
  exclude: [
    '/ecosystem',
    '/ecosystem/get-funded',
    '/get-funded',
    '/admin',
    '/blog/*',
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
