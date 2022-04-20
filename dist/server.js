"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// import * as express from 'express'
const express = require("express");
const base_route_1 = require("./modules/base/routes/base.route");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        //temporarely allowing cors for all
        this.app.use((req, res, next) => {
            //we can send response to (*)all site ('site1.com,site2.com') will only send response to these sites
            res.setHeader('Access-Control-Allow-Origin', '*');
            //we allow the origins to access the following http methods
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            //so that our client can send extra authorization data in headers and define the content type of req.
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
            next();
        });
        this.app.use(express.json());
        //use body parsers and stuf here
    }
    authorize(req, res, next) {
    }
    routes() {
        let router;
        router = express.Router();
        new base_route_1.BaseRoute(router);
        this.app.use('/', router);
    }
}
exports.Server = Server;
