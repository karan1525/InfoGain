const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {

      User.findOne({ googleId: profile.id }).then( (existingUser) => {
          if (existingUser) {
            // we already have the record with the given profile ID
            done(null, existingUser); // no error & an the user we have
          } else {
            // we don't have a user with this ID. Make a new record
            new User ({ googleId: profile.id })
              .save()
              .then( user => done(null, user));
          }
        })

    }
  )
);
