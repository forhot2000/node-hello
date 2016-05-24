var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Good morning! (V2)');
});

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
