const SimpleDb = require('./SimpleDb');

const rootDir = './public';
const db = new SimpleDb(rootDir);

const app = async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const requestData = await db.getFile('index.html');
    if (requestData === null) {
      res.statusCode = 404;
      res.end('404: Not Found');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(requestData);
    }
  } else if (req.url === '/css/main.css' && req.method === 'GET') {
    const requestData = await db.getFile('css/main.css');
    if (requestData === null) {
      res.statusCode = 404;
      res.end('404: Not Found');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(requestData);
    }
  }
};

module.exports = app;
