console.log('OAuth2_Client');
var request = require('request');

var public_page_url = 'http://localhost:3001/public/page1';
var protected_page_url = 'http://localhost:3001/protected/page1';
// To Do: Change to HTTPS

var response_logger = function(err, res, body) {
  if (err) {
    console.log('---------------- ERROR ----------------');
    console.log(err);
  } else {
//    console.log('---------------- res ----------------');
//    console.log(res)
    console.log('---------------- body ----------------');
    console.log(body);
    console.log('Result Code: ' + res.statusCode);
    if (res.statusCode >= 300 && res.statusCode < 400) {
      console.log('Location: ' + res.headers.location);
      request.get({
        url: res.headers.location,
        followRedirect: false },
        response_logger);
    }
  }
  clearTimeout(timeout);
};


console.log('Getting: ' + public_page_url);
request.get(public_page_url, response_logger);

console.log('Getting: ' + protected_page_url);
request.get({ url: protected_page_url, followRedirect: false }, response_logger);


console.log('Waiting for Response');
timeout = setTimeout(function() {
    console.log('Timed Out (Response did not come in 30 seconds)');
}, 30 * 1000);

