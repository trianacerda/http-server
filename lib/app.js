const SimpleDb = require('./SimpleDb');

//exported function- using (req, res)

// GET / -- index.html-- res.text

// rootDir/folder/file

// const response = id
//       ? dogs.find((dog) => dog.id === id)
//       : dogs;

const app = async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const rootDir = '../public';
    const db = new SimpleDb(rootDir);
    const requestData = await db.getHTML('index');
    res.setHeader('Content-Type', 'text/html');
    res.end(requestData);
  }
};

module.exports = app;
