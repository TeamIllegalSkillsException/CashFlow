'use strict'

const environment = process.env.NODE_ENV || 'development',
    config = require('./config/config')(environment),
    app = require('./config/application')(config),
    data = require('./data')();

require('./config/database')(config.connectionString);
require('./auth')(app, data);
require('./router')(app, data);

// let user = {
//     firstName: 'admin',
//     lastName: 'adminski',
//     username: 'admin',
//     password: 'admin123456',
//     email: 'email@email.com',
//     age: 20,
//     role: 'admin'
// };
// data.createUser(user);
let about = {
    content: 'admin',
    team: [{
        avatar: '/asdads/123',
        name: 'pesho',
        jobTitle: 'shef',
        socialMediaIcons: []
    }, ],
};
data.createAboutData(about);

app.start();