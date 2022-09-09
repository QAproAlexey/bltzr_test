require('dotenv').config();

module.exports = {
  env: process.env.ENVIRONMENT,
  userPassword: process.env.USER_PASSWORD,

  mail7: {
    apiKey: process.env.MAIL7_API_KEY,
    apiSecret: process.env.MAIL7_API_SECRET
  },
  metamask: {
    recoveryPhrase: process.env.METAMASK_RECOVERY,
    password: process.env.METAMASK_PASSWORD
  }
};
