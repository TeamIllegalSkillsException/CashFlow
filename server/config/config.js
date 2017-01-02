'use strict';

module.exports = function(environment) {
    const config = {
        development: {
            cookieName: 'test cookie',
            sessionSecret: 'secret ala bala',
            webTokenSecret: 'secret mecret',
            connectionString: 'mongodb://Azonic89:VASko2814mlyo89@ds151018.mlab.com:51018/cash-flow-db',
            port: 3003,
            email: 'eventsys.sup@gmail.com',
            password: 'ninjas123456'
        },
        production: {
            cookieName: process.env.COOKIE_NAME,
            sessionSecret: process.env.SESSION_SECRET,
            webTokenSecret: process.env.WEB_TOKEN_SECRET,
            connectionString: process.env.CONNECTION_STRING,
            port: process.env.PORT,
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        }
    };

    return config[environment];
};