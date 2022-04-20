"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import http from 'http'
const http = require("http");
const server = require("./server");
const httpPort = '4201';
let app = server.Server.bootstrap().app;
app.set('post', httpPort);
const httpServer = http.createServer(app);
console.log("listening on port ", httpPort);
httpServer.listen(httpPort);
