'use strict';

module.exports = function(environment) {
  const config = {
    development: {
      cookieName: '',
      sessionSecret: 'secret ala bala',
      connectionString: 'mongodb://localhost:27017/cash-flow-db',
      port: 3003,
      email: 'test@test.tt',
      password: 'asdasd'
    },
    production: {
      cookieName: process.env.COOKIE_NAME,
      sessionSecret: process.env.SESSION_SECRET,
      connectionString: process.env.CONNECTION_STRING,
      port: process.env.PORT,
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    }
  };

  return config[environment];
};
