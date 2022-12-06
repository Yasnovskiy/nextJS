const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    SERVER: process.env.SERVER,
    I18NEXUS_API_KEY: process.env.I18NEXUS_API_KEY,
  },
};
