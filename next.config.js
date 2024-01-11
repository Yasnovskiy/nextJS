const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    SERVER: process.env.SERVER,
    SERVER_DEV: process.env.SERVER_DEV,
    I18NEXUS_API_KEY: process.env.I18NEXUS_API_KEY,
    I18NEXUS_API_KEY_TEST: process.env.I18NEXUS_API_KEY_TEST,
  },
};
