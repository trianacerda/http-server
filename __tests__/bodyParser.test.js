// const request = require('supertest');
const bodyParser = require('../lib/bodyParser');
// const { readFile } = require('fs/promises');

describe('Body Parser', () => {
  xit('returns null if method is not POST, PUT, or PATCH', async () => {
    const testObj = await bodyParser({
      method: 'GET',
      url: '/dogs/2',
    });
    expect(testObj).toBeNull();
  });
});
