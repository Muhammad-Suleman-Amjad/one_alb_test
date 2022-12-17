const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! - Test Env\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`TServer running on http://localhost:${port}/`);
});
