const request = require('supertest');
const app = require('../app');

describe('The application', () => {
    afterAll(done => {
        app.close();
        done();
    });

    it('should run', async() => {
        // Assert
        await request(app).get('/')
                .expect(200);
    });
});

