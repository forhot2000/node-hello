var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send([
    '<h1>Hello World!<h1>', 
    '<p><i>DOCKER_IMAGE: ', os.environ['DOCKER_IMAGE'], '</i></p>',
    '<p><i>ENVIRONMENT: ', os.environ['ENVIRONMENT'], '</i></p>'
  ].join('\n'));
});

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
