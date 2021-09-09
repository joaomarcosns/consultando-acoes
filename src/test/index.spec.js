const app = require('../server');
const request = require('supertest');


test('Willful mistake ', async () => {
    const res = await request(app).get('/company/aapl');
    expect(res.statusCode).toEqual(200)
});

test('teste on get /company', async () => {
    const res = await request(app).get('/company');
    expect(res.statusCode).toEqual(200)
});

test('teste on post /company', async () => {
    const res = await request(app).post('/company/fb');
    
    expect(res.statusCode).toEqual(200)
});