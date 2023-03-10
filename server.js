const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();

// const data = require('./db.js')();

// fs.writeFile ("db.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );


const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);