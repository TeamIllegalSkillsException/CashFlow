'use strict';

const environment = process.env.NODE_ENV || 'development',
    config = require('./config/config')(environment),
    app = require('./config/application')(config),
    data = require('./data')();

require('./config/database')(config.connectionString);
require('./auth')(app, config, data);
require('./router')(app, config, data);


// let user = {
//     firstName: 'admin',
//     lastName: 'adminski',
//     username: 'admin',
//     password: 'admin123456',
//     email: 'email@email.com',
//     age: 20,
//     role: 'admin'
// };
//data.createUser(user);


// There is some annoying bug here!!! and the data
// let ourServices = {
//     content: 'Chukundursi',
//     avatar: 'http://img.memecdn.com/yolo-swag_o_1660131.jpg',
//     title: 'The guy with no life',
//     freeOfCharge: 'You WISH!!!',
//     paid: 'But Of Course!!!'
// };
// data.createOurServicesData(ourServices);

// let about = {
//     content: 'We are young and tough and we are trying to rock the world with this app. Unforunately we r using Angular 2 ><',
//     avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/14702243_1455497067799478_955787893861110435_n.jpg?oh=672068d2a17145e80da2812619bbc08a&oe=5922CECB',
//     name: 'Vasil Penev',
//     jobTitle: 'CEO',
//     socialMediaIcons: []
// };
// data.createAboutData(about);

// let about2 = {
//     content: 'We are young and tough and we are trying to rock the world with this app. Unforunately we r using Angular 2 ><',
//     avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/425116_235117463238050_1408560973_n.jpg?oh=f0e09072f195b7936a1a7abcd89a930c&oe=58E19476',
//     name: 'Dimitur Kalaydzhiev',
//     jobTitle: 'CEO',
//     socialMediaIcons: []
// };
// data.createAboutData(about2);

// let about3 = {
//     content: 'We are young and tough and we are trying to rock the world with this app. Unforunately we r using Angular 2 ><',
//     avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13906970_10210535840300100_2497753137668459306_n.jpg?oh=e9faadf031de7ee3bb96199c11a26af8&oe=58EE0C6F',
//     name: 'Zorka Shindova',
//     jobTitle: 'CEO',
//     socialMediaIcons: []
// };
// data.createAboutData(about3);

// let testimonial = {
//     content: 'bla',
//     avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13906970_10210535840300100_2497753137668459306_n.jpg?oh=e9faadf031de7ee3bb96199c11a26af8&oe=58EE0C6F',
//     name: 'Zorka jiasjva',
//     jobTitle: 'CEO',
// }
// data.createTestimonialData(testimonial);


// let SITE_ADDRESS = {
//     key: 'SITE_ADDRESS',
//     value: "Aleksandar Malinov, Sofia, Bulgaria"
// };

// let SITE_EMAIL = {
//     key: 'SITE_EMAIL',
//     value: "cashflowsup@gmail.com"
// };

// let SITE_PHONE = {
//     key: 'SITE_PHONE',
//     value: "+359123456789"
// };

// data.createee(SITE_ADDRESS);
// data.createee(SITE_PHONE);
// data.createee(SITE_EMAIL);

app.start();