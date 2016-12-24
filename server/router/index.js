'use strict';

const fs = require('fs'),
    path = require('path'),
    express = require('express');

const routerFileNamesPattern = '-router.js';

module.exports = function (app, data) {
    fs.readdirSync('./server/router')
        .filter(file => file.includes(routerFileNamesPattern))
        .forEach(file => require(path.join(__dirname, file))(app, express, data));
};
