var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send([
    '<h1>Hello World!</h1>\n', 
    '<p><i>DOCKER_IMAGE: ', process.env.DOCKER_IMAGE, '</i></p>\n',
    '<p><i>ENVIRONMENT: ', process.env.ENVIRONMENT, '</i></p>\n'
  ].join(''));
});

app.get('/ping', function (req, res) {
  res.send('pong');
});

module.exports = app;
