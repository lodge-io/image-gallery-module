const app = require('../server/app');

const request = require('supertest');

describe('API', () => {
  describe('GET /api/rooms/:id/photos', () => {
    test('should respond with status code 200', () => {
      return request(app)
        .get('/api/rooms/1/photos')
        .expect(200);
    });

    test('should respond with a 404 for invalid id', () => {
        return request(app)
          .get('/api/rooms/101/photos')
          .expect(404);
      });
    }); 
}); 