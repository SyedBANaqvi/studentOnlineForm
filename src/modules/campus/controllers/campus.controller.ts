import * as express from 'express';

import { CampusModel } from '../models/campus.model';
import { ErrorHandler } from '../../base/conf/error-handler';

export class CampusControllers {
  constructor() { }
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    let id = req.params.id;

    new CampusModel(req)
    .find( req.body)
      .then(result => {
        
      res.json(result);

  })
  .catch(err => {
    res.json(err.Message);
  });
}
  hello(req: express.Request, res: express.Response, next: express.NextFunction)
  {
      
    return res.send("Hello")
  }
public list(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CampusModel(req)
    .list()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

}
