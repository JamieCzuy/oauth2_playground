console.log('OAuth2_Client');
var request = require('request');

var public_page_url = 'http://localhost:3001/public/page1';
var protected_page_url = 'http://localhost:3001/protected/page1';
// To Do: Change to HTTPS

console.log('Getting: ' + public_page_url);
request.get(public_page_url, function(err, res, body) {
  if (err) {
    console.log('---------------- ERROR ----------------');
    console.log(err);
  } else {
//    console.log('---------------- res ----------------');
//    console.log(res)
    console.log('---------------- body ----------------');
    console.log(body);
    console.log('Result Code: ' + res.statusCode);
  }
  clearTimeout(timeout);
});


console.log('Getting: ' + protected_page_url);
request.get(protected_page_url, function(err, res, body) {
  if (err) {
    console.log('---------------- ERROR ----------------');
    console.log(err);
  } else {
//    console.log('---------------- res ----------------');
//    console.log(res)
    console.log('---------------- body ----------------');
    console.log(body);
    console.log('Result Code: ' + res.statusCode);
  }
  clearTimeout(timeout);
});

console.log('Waiting for Response');
timeout = setTimeout(function() {
    console.log('Timed Out (Response did not come in 30 seconds)');
}, 30 * 1000);

