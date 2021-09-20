const request = require('supertest');
const app = require('../lib/app'); //check path issue?
// const { writeFile, readFile, readdir, rm } = require('fs/promises');

describe('http routes', () => {
  it('should return contents in index.html from GET /', async () => {
    const res = await request(app).get('/');
    expect(res.text).toEqual(expect.any(String));
  });
});
