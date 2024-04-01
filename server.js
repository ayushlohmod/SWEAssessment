// server.js

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth configuration
passport.use(new GoogleStrategy({
    clientID: '170558284817-s833602sa2j63rbr4g4gmojefqb51lci.apps.googleusercontent.com',
    clientSecret: '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',
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Verify user profile or create new user
  console.log(profile);
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to the homepage or any other desired route
    res.redirect('/');
  });

app.get('/', (req, res) => {
  // Serve the homepage content or any other content here
  res.send('Welcome to the homepage');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
