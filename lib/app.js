const SimpleDb = require('./SimpleDb');

const rootDir = './public';
const db = new SimpleDb(rootDir);

const app = async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const requestData = await db.getHTML();
    res.setHeader('Content-Type', 'text/html');
    // console.log('LOOK', requestData);
    res.end(requestData);
  }
};

module.exports = app;
