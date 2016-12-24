'use strict';

module.exports = function(environment) {
  const config = {
    development: {
      cookieName: '',
      sessionSecret: 'secret ala bala',
      connectionString: 'mongodb://localhost:27017/cash-flow-db',
      port: 3003
    },
    production: {
      cookieName: process.env.COOKIE_NAME,
      sessionSecret: process.env.SESSION_SECRET,
      connectionString: process.env.CONNECTION_STRING,
      port: process.env.PORT
    }
  };

  return config[environment];
};
