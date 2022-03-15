// server.js 
// taken from https://www.npmjs.com/package/json-server documentation
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })
server.listen(port)