const request = require('supertest');
const app = require('../lib/app'); //check path issue?
const { readFile } = require('fs/promises');

describe('http routes', () => {
  it.only('should return contents in index.html from GET /', async () => {
    const [res, file] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8'),
    ]);

    expect(res.text).toEqual(file);
  });

  // it('should return main.css file contents on GET /styles/main.css', async () => {
  //   const res = await request(app).get('/css/main.css');
  //   expect(res.text).toEqual(expect.any(String));
  // });
});
