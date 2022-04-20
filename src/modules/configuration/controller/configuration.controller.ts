import * as express from 'express';

import { ConfigurationModel } from '../models/configuration.model';
import { ErrorHandler } from '../../base/conf/error-handler';

export class ConfigurationController {
  constructor() { }
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    let id = req.params.id;

    new ConfigurationModel(req)
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
  new ConfigurationModel(req)
    .list()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public parentKeyWithDetail(req: express.Request, res: express.Response, next: express.NextFunction) {
    new ConfigurationModel(req)
      .parentKeyWithDetail()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        ErrorHandler.sendServerError(req, err, res, next);
      });
    }

    public parentKeyToFindTehsil(req: express.Request, res: express.Response, next: express.NextFunction) {
        new ConfigurationModel(req)
          .parentKeyToFindTehsil()
          .then(result => {
            res.send(result);
          })
          .catch(err => {
            ErrorHandler.sendServerError(req, err, res, next);
          });
        }

        public parentKeyToFindProvince(req: express.Request, res: express.Response, next: express.NextFunction) {
          new ConfigurationModel(req)
            .parentKeyToFindProvince()
            .then(result => {
              res.send(result);
            })
            .catch(err => {
              ErrorHandler.sendServerError(req, err, res, next);
            });
          }
        public keyToFindAdmissionTypes(req: express.Request, res: express.Response, next: express.NextFunction) {
            new ConfigurationModel(req)
              .keyToFindAdmissionTypes()
              .then(result => {
                res.send(result);
              })
              .catch(err => {
                ErrorHandler.sendServerError(req, err, res, next);
              });
            }

}
