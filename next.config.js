const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    SERVER: process.env.SERVER,
    SERVER_DEV: process.env.SERVER_DEV,
    I18NEXUS_API_KEY_DEV: process.env.I18NEXUS_API_KEY_DEV,
    I18NEXUS_API_KEY_TEST: process.env.I18NEXUS_API_KEY_TEST,
  },
  webpack(webpackConfig) {
    webpackConfig.resolve.fallback = { fs: false };

    return webpackConfig;
  },
};
