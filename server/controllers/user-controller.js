'use strict';
const helpers = require('../helpers');

const environment = process.env.NODE_ENV || 'development',
    config = require('../config/config')(environment),
    nodemailer = require('nodemailer'),
    passport = require('passport'),
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
            const webTokenObject = {
              _id: req.user.id,
              username: req.user.username
            };

            res.status(200).json({
              username: req.user.username,
              auth_token: jwt.sign(webTokenObject, webTokenSecret)
            });
        },
        getProfile(req, res) {
          const userJson = JSON.parse(JSON.stringify(req.user));

          delete userJson.passwordHash;
          delete userJson.salt;
          res.status(200).json(userJson);
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

            const userObject = req.body;
            return data.getUserByName(userObject.username)
                .then(user => {
                    if (user) {
                        throw new Error('Username already exists.');
                    }

                  return data.getUserByEmail(userObject.email);
                })
                .then((user) => {
                    if (user) {
                        throw new Error('Email already exists.');
                    }
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
            const userIdForUpdate = req.body._id;
            const updateObj = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            };

            return data.findUserByIdAndUpdate(userIdForUpdate, updateObj)
                .then((user) => {
                    if (!user) {
                      throw new Error('User not found.');
                    }

                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).json({ message: helpers.errorHelper(err) });
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
          var token = req.get('AuthToken');

          if (token) {
            let decoded = jwt.decode(token, config.webTokenSecret);

            return data.getUserByName(decoded.username)
              .then((user, err) => {
                if (!user) {
                    return res.json({ success: false, message: 'No user.' });
                } else {
                  res.json({
                    success: true,
                    user: {
                      token,
                      username: user.username,
                      firstname: user.firstname,
                      lastname: user.lastname,
                      _id: user._id
                    }
                  });
                }

              })
          }
          else {
            return res.json({success: false, message: "No token, sorry dude"});
          }
        },
        logout(req, res) {
            req.logout();
            res.status(200).json({ message: 'Logout Success' });
        },
        sendEmail(req, res) {
            return Promise.resolve()
                .then(() => {
                    let userEmail = req.body.email,
                        subject = req.body.subject,
                        message = req.body.message,
                        fullName = req.body.firstName + ' ' + req.body.lastName;

                   // console.log(req.body);

                    if (req.body.firstName.trim() == '') {
                        return 'First name cannot be empty'
                    }

                    if (req.body.lastName.trim() == '') {
                        return 'Last name cannot be empty'
                    }

                    if(userEmail.trim() == '') {
                        return 'Email cannot be empty';
                    }

                    if(message.trim() == '') {
                        return 'Message cannot be empty';
                    }

                    const mailOptions = {
                        to: config.email,
                        from: config.email,
                        subject: subject,
                        text: message,
                        html: `Fullname of user: ${fullName},
                               useremail: ${userEmail}, 
                               messages ${message}`
                    };

                    transporter.sendMail(mailOptions, (err) => {
                        if (err) {
                            console.log(err.message);
                        }
                        return res;
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: err }));
                });
        },
        sendNewAutoGeneratedPassword(req, res) {
            return Promise.resolve()
                .then(() => {
                    let userEmail = req.body.userEmail;

                    if(userEmail.trim() == '') {
                        return 'Email cannot be empty';
                    }

                    data.getUserByEmail(userEmail)
                        .then((user) => {
                            if(!user) {
                                return res.json({
                                    success: false,
                                    message: 'No user'
                                });
                            }
                            data.generateNewPassword(user)
                                .then((generatedPassword) => {
                                    const mailOptions = {
                                        to: userEmail,
                                        from: config.email,
                                        subject: 'New Password Generated',
                                        html: `Hello,                            
                                            your new password for account with email: ${userEmail} is: 
                                            ${generatedPassword}`
                                    };
                                    transporter.sendMail(mailOptions, (err) => {
                                        if (err) {
                                            console.log(err.message);
                                        }
                                        return res.json({
                                            sucsess: true,
                                            userEmail: userEmail
                                        });
                                    });
                                });
                    })
                    .catch((err) => {
                        return res.json({
                            success: false,
                            message: 'No user'
                        });
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: err }));
                });
        }
    };
};
