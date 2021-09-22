const SimpleDb = require('./SimpleDb');

const rootDir = './public';
const db = new SimpleDb(rootDir);

const app = async (req, res) => {

 

  if (req.url === '/' && req.method === 'GET') {
    const requestData = await db.getFile('index.html');
    res.setHeader('Content-Type', 'text/html');
    res.end(requestData);
      
  } 
  else if(req.url === '/css/main.css' && req.method === 'GET') {
    const requestData = await db.getFile('css/main.css');
    res.setHeader('Content-Type', 'text/html');
    res.end(requestData);
  }
  else{
    res.statusCode = 404;
    res.end('404 Not Found');
  }
      
  

};

module.exports = app;
