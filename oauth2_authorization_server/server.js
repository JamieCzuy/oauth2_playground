console.log('oauth2_authorization_server');
var express = require('express');
var passport = require('passport');

var app = module.export = express();
app.use(passport.initialize());

app.get('*', function(req, res, next) {
  console.log('req --> ' + req.method + ': ' + req.url);
  next();
});

app.get('/oauth2/authorize', function(req, res, next) {
  console.log('authorize req --------');
//  console.log(req);
  res.send('Authorize User');
  next();
});


app.get('/authentication/callback',
  passport.authenticate('oauth2', { failureRedirest: '/authentication/failed' }),
  function(req, res) {
    res.redirect('/authentication/passed');
});


console.log('Listening on 3002');
app.listen(3002)
