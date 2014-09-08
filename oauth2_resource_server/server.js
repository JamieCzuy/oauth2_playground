console.log('OAuth2_Resource_Server');
var express = require('express');

var app = module.export = express();

app.all('*', function(req, res, next) {
  console.log('req --> ' + req.method + ': ' + req.url);
  next();
});

app.get(
  '/protected/page1',
  function(req, res, next) {
    res.send('Page1 is not yet Protected');
    next();
  }
);

var PORT = 3001;
console.log('Listening on port: ' + PORT);
app.listen(3001);

