// import * as express from 'express'
import express = require('express');
import  { BaseRoute } from './modules/base/routes/base.route';


export class Server
{
    public app;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor()
    {
        this.app = express();

        this.config();
        this.routes();
    }

    public config()
    {
        //temporarely allowing cors for all
        this.app.use((req,res,next)=>{
            //we can send response to (*)all site ('site1.com,site2.com') will only send response to these sites
            res.setHeader('Access-Control-Allow-Origin','*');
            //we allow the origins to access the following http methods
            res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
            //so that our client can send extra authorization data in headers and define the content type of req.
            res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');

            
            next();
        });

        this.app.use(express.json())
        //use body parsers and stuf here
    }

    private authorize(req,res,next)
    {
        
    }

    private routes()
    {
        let router:express.Router;
        router = express.Router();

        new BaseRoute(router);
        this.app.use('/',router)

    }

}