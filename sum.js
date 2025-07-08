const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const result = 2 + 3;
  res.end(`The result of 2 + 3 is ${result}`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
