console.log('OAuth2_Resource_Server');
var express = require('express');

var app = module.export = express();

app.get(
  '/protected/page1',
  function(req, res, next) {
    res.send('Page1 is not yet Protected');
    next();
  }
);

app.listen(3001);

