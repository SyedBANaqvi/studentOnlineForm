import * as express from 'express';

import { CountryModel } from '../models/country.model';
import { ErrorHandler } from '../../base/conf/error-handler';

export class CountryController {
  constructor() { }
//   find(req: express.Request, res: express.Response, next: express.NextFunction) {
    
//     let id = req.params.id;

//     new CountryModel(req)
//     .find( req.body)
//       .then(result => {
        
//       res.json(result);

//   })
//   .catch(err => {
//     res.json(err.Message);
//   });
// }
  hello(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    return res.send("Hello")
  }
public list(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CountryModel(req)
    .list()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public create(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CountryModel(req)
    .createWithDetail(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

public update(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CountryModel(req)
    .updateWithDetail(req.params.id, req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public deleteAllDetail(req: express.Request, res: express.Response, next: express.NextFunction) {
  
  new CountryModel(req).deleteAllDetail(req.params.id).then(result => {
    
    res.send(result);
  })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public find(req: express.Request, res: express.Response, next: express.NextFunction) {
  new CountryModel(req)
    .findDetail(req.params.id)
    .then(result => {
      res.send(result);
    })
  }
}
