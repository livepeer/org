const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'es', 'ru', 'zh', 'ko'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
};
