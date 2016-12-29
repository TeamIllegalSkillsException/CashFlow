'use strict';

const LocalStrategy = require('passport-local');

module.exports = function (passport, app, config, data) {

    const authStrategy = new LocalStrategy(
        {
          username: 'username',
          password: 'password'
        },
        (username, password, done) => {
            data.getUserByName(username)
                .then(user => {
                    if (user && user.authenticatePassword(password)) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                })
                .catch(error => done(error, false));
        });

    passport.use(authStrategy);

 /* app.use(passport.initialize());
  app.use(passport.session());

  const localStrategy = new LocalStrategy({
    email: 'email',
    password: 'password'
  }, (email, password, done) => {
    data.getUserByEmail(email)
      .then((user) => {
        if (user) {
          return {
            isAuthenticated: user.authenticatePassword(password),
            user
          };
        }

        return done(null, false);
      })
      .then((result) => {
        if (!result) {
          return done(null, false);
        }

        if (result.isAuthenticated) {
          return done(null, result.user);
        }

        return done(null, false);
      })
      .catch(err => {
        return done(err, false);
      });
  });

  passport.serializeUser((user, done) => {
    if (user) {
      return done(null, user._id);
    }

    return done(null, null);
  });

  passport.deserializeUser((id, done) => {
    userData
      .getUserById(id)
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      })
      .catch(err => {
        done(err, false);
      });
  });

  passport.use(localStrategy);*/
};
