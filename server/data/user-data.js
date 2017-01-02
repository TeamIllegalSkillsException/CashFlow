'use strict';

module.exports = function(models) {
    const User = models.User;

    return {
        createUser(userData) {
            let user = new User(userData);           
            return new Promise((resolve, reject) => {               
                user.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(user);
                });
            });
        },
        getUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({ _id: id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!user) {
                        return reject(user);
                    }

                    return resolve(user);
                });
            });
        },
        findUserByIdAndUpdate(id, update) {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({ _id: id }, update, { runValidators: true }, (err, user) => {

                    if (err) {
                        return reject(err);
                    }
                    if (!user) {
                        return reject(user);
                    }

                    return resolve(user);
                });
            });
        },
        getUserByName(username) {
            return new Promise((resolve, reject) => {
                User.findOne({ username }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUserByEmail(email) {
            return new Promise((resolve, reject) => {
                User.findOne({ email }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUsersByNames(User, ...names) {
            return new Promise((resolve, reject) => {
                User.find({
                    name: { $in: names }
                }, (err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
                User.find((err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        },
        generateNewPassword(user) {
            return new Promise((resolve, reject) => {
                let generatedPassword = Math.random().toString(36).substr(2, 6);

                User.findOne({ email: user.email }, (err, userr) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!userr) {
                        return reject(userr);
                    }

                    userr.password = generatedPassword;
                    userr.save();

                    return resolve(generatedPassword);
                });
            });
        }
    };
};
