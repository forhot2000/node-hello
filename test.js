var request = require('supertest');
var app = require('./server');

describe('test get root path', function() {
  it('should return 200 ok', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('test get pint path', function() {
  it('should return 200 ok', function(done) {
    request(app)
      .get('/ping')
      .expect(200, done);
  });
});

