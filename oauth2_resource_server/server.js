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
  console.log('Public Page');
  res.send('Public Page #1');
  next();
});

app.get('/protected/page1', passport.authenticate('oauth2'),  function(req, res, next) {
  console.log('Protected Page');
  res.send('Protected Page #1 is not yet Protected');
  next();
});

app.get('/protected/page1/callback',
        passport.authenticate('oauth2', { failureRedirect: '/login' }),
        function(req, res) {
          console.log('Successful page1 authentication');
          res.redirect('/');
        });


newStrategy = function(strategy) {
  return new OAuth2Strategy({
    authorizationURL: 'http://localhost:3002/oauth2/authorize',
    tokenURL: 'http://localhost:3002/oauth2/token',
    clientID: 'oauth2_client_id',
    clientSecret: 'oauth2_client_secret',
//    callbackURL: 'http://localhost:3003/authentication/callback'
    callbackURL: 'http://localhost:3001/protectedpag1/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // ---- User.findOrCreate ---- //
    console.log('User has been Authenticated');
    console.log('profile.id: ' + profile.id);
    return done({username: 'OAuth2 User'});
  });
}
passport.use(newStrategy());


var PORT = 3001;
console.log('Listening on port: ' + PORT);
app.listen(3001);

