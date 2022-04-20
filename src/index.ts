// import http from 'http'
import * as http from 'http'
import * as server from './server'


const httpPort = '4201';
let app = server.Server.bootstrap().app;
app.set('post',httpPort);

const httpServer = http.createServer(app);

console.log("listening on port ", httpPort);

httpServer.listen(httpPort);



