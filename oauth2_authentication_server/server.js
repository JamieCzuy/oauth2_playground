console.log('oauth_authentication_server');
var express = require('express');

var app = module.export = express();

app.get('*', function(req, res, next) {
  console.log('req --> ' + req.method + ': ' + req.url);
  next();
});

app.get('/authentication/callback', function(req, res, next) {
  console.log('authenicating the user');
  res.send('Authenticating the user');
  next();
});

console.log('Listening on 3003');
app.listen(3003);

