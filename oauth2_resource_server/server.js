console.log('OAuth2_Resource_Server');
var express = require('express');
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2').Strategy;


var app = module.export = express();

app.all('*', function(req, res, next) {
  console.log('req --> ' + req.method + ': ' + req.url);
  next();
});

app.get('/public/page1', function(req, res, next) {
  res.send('Public Page #1');
  next();
});

app.get('/protected/page1', passport.authenticate('oauth2'),  function(req, res, next) {
  res.send('Protected Page #1 is not yet Protected');
  next();
});


newStrategy = function(strategy) {
  return new OAuth2Strategy({
    authorizationURL: 'http://localhost:3002/oauth2/authorize',
    tokenURL: 'http://localhost:3002/oauth2/token',
    clientID: 'oauth2_client_id',
    clientSecret: 'oauth2_client_secret',
    callbackURL: 'https://localhost:3003/authentication/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // ---- User.findOrCreate ---- //
    console.log('User has been Authenticated');
    return done({username: 'OAuth2 User'});
  });
}
passport.use(newStrategy());


var PORT = 3001;
console.log('Listening on port: ' + PORT);
app.listen(3001);

