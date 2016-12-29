'use strict';
const passport = require('passport'),
    helpers = require('../helpers');

module.exports = function(data) {
    return {
        loginLocal(req, res, next) {
            const auth = passport.authenticate('local', function(error, user) {
                if (error) {
                    next(error);
                    return;
                }

                if (!user) {
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    res.status(200)
                        .send({ redirectRoute: '/profile' });
                });
            });

            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        auth(req, res, next);
                    } else {
                        res.redirect('/home');
                    }
                });
        },
        logout(req, res) {
            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        res.redirect('/home');
                    } else {
                        req.logout();
                        res.redirect('/home');
                    }
                });
        },
        register(req, res) {
            const user = req.body;

            if (req.user) {
              return res.status(400).json({ message: 'User already logged in.' });
            }

            return Promise.resolve()
                .then(() => {
                    if (!req.isAuthenticated()) {
                        return data.createUser(user);
                    } else {
                        res.redirect('/home');
                    }
                })
                .then(dbUser => {
                    res.status(200).json({ message: 'user created' });
                })
                .catch(error => {
                    res.status(400)
                        .send(JSON.stringify({ validationErrors: error.message }));
                });
        }
    };
};
