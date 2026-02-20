const http = require('http');

//external module
const express= require('express');

const requestHandler = require('./user');

const app=express();

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});