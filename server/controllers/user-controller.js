'use strict';

const environment = process.env.NODE_ENV || 'development',
    config = require('../config/config')(environment),
    nodemailer = require('nodemailer'),
    jwt = require('jsonwebtoken');

const User = require('../models/user-model');

const settings = {
    host: 'smtp.sendgrid.net',
    service: 'Gmail',
    port: parseInt(587, 10),
    requiresAuth: true,
    auth: {
        user: config.email,
        pass: config.password
    }
};
const transporter = nodemailer.createTransport(settings);

module.exports = function(data) {
    const webTokenSecret = config.webTokenSecret;

    return {
        getLogin(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.render('user/login', {});
                    } else {
                        res.redirect('/home');
                    }
                });
        },
        getProfile(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.status(401).redirect('/unauthorized');
                    } else {
                        if (req.user.role === 'admin') {
                            res.render('user/profile', { user: req.user, isAdmin: true });
                        } else {
                            res.render('user/profile', { user: req.user, isAdmin: false });
                        }
                    }
                });
        },
        getProfileAvatar(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.status(401).redirect('/unauthorized');
                    } else {
                        if (req.user.role === 'admin') {
                            res.render('user/profile-avatar', { user: req.user, isAdmin: true });
                        } else {
                            res.render('user/profile-avatar', { user: req.user, isAdmin: false });
                        }
                    }
                });
        },
        uploadProfileAvatar(req, res) {
            return new Promise((resolve, reject) => {
                    if (!req.isAuthenticated()) {
                        res.status(401).redirect('/unauthorized');
                        reject();
                    } else {
                        let form = new formidable.IncomingForm();
                        form.maxFieldsSize = 2 * 1024 * 1024;

                        form.onPart = function(part) {
                            if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
                                form.on('end', function(fields, files) {
                                    if (this.openedFiles[0].size > form.maxFieldsSize) {
                                        return reject({ name: 'ValidationError', message: 'Maximum file size is 2MB.' });
                                    } else {
                                        res.status(200)
                                            .send({ redirectRoute: '/profile' });
                                    }

                                    let userFolder = req.user.id,
                                        pathToUploadFolder = path.join(__dirname, '../../public/uploads/users', userFolder),
                                        newFileName = 'avatar';

                                    uploader.uploadFile(this.openedFiles[0], pathToUploadFolder, newFileName)
                                        .then(uploadedFileName => {
                                            resolve(uploadedFileName);
                                        });
                                });
                                form.handlePart(part);
                            } else {
                                return reject({ name: 'ValidationError', message: 'File types allowed: jpg, jpeg, png.' });
                            }
                        };

                        form.on('error', function(err) {
                            reject(err);
                        });

                        form.parse(req);
                    }
                })
                .then((fileName) => {
                    if (typeof fileName !== 'string') {
                        return;
                    }

                    let avatarUrl = '/static/uploads/users/' + req.user.id + '/' + fileName;
                    data.findUserByIdAndUpdate(req.user.id, { avatarUrl });
                })
                .catch((err) => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: [err.message] }));
                });
        },
        getUnauthorized(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.render('unathorized', {});
                    } else {
                        res.redirect('/home');
                    }
                });
        },
        getRegister(req, res) {
          if (req.user) {
            return res.status(400).json({ message: 'User already logged in.' });
          }

          const userObject = req.body;

          return data.getUserByName(userObject.username)
            .then(user => {
              if (user) {
                throw new Error('Username already exists.');
              }

              return userObject;
            })
            .then(() => {
              return data.createUser(userObject);
            })
            .then(() => {
              res.status(200).json({ message: 'success' });
            })
            .catch((err) => {
              res.status(400).json({ message: err.message });
            });
        },
        updateProfile(req, res) {
            const updatedUser = req.body;

            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.redirect('/home');
                    } else {
                        return data.findUserByIdAndUpdate(req.user._id, updatedUser);
                    }
                })
                .then(user => {
                    res.status(200)
                        .send({ redirectRoute: '/profile' });
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        },
        getAll(req, res) {
            return data.getAllUsers()
                .then((users) => {
                    if (!users) {
                        throw new Error('No users available');
                    }
                    res.status(200).json(users);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        },
        getAuthentication(req, res) {

          return data.getUserByName(req.body.username)
            .then((user) => {
              if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
              }

              else if (user) {

                // check if password matches
                console.log(user.password);
                console.log(req.body.password);
                if (user.password == undefined || (user.password !== req.body.password)) {
                  res.json({success: false, message: 'Authentication failed. Wrong password.'});
                } else {

                  // if user is found and password is right
                  // create a token
                  var token = jwt.sign(user, webTokenSecret, {});

                  // return the information including token as JSON
                  res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                  });
                }
              }
            })
        },
        sendEmail(req, res) {
            return Promise.resolve()
                .then(() => {
                    console.log(req.body);

                    let userEmail = req.body.email,
                        subject = req.body.subject,
                        message = req.body.message;

                    const mailOptions = {
                        to: config.email,
                        from: config.email,
                        subject: subject,
                        text: message,
                        html: `useremail: ${userEmail}, messages ${message}`
                    };

                    transporter.sendMail(mailOptions, (err) => {
                        if (err) {
                            console.log(err.message);
                            //return res.redirect('/contact');
                        }

                        // res.redirect('/contact');
                        return res;
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: helpers.errorHelper(err) }));
                });
        }
    };
};
