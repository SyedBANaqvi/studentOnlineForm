import * as express from 'express';

import { ErrorHandler } from '../../base/conf/error-handler';
import { Attachment_2Model } from '../models/attachment_2.model';
export class Attachment_2Controllers {
  constructor() { }
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    let id = req.params.id;

    new Attachment_2Model(req)
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
// public list(req: express.Request, res: express.Response, next: express.NextFunction) {
//   new Attachment_2Model(req)
//     .list()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       ErrorHandler.sendServerError(req, err, res, next);
//     });
// }
public createAttachment(req: express.Request, res: express.Response, next: express.NextFunction) {
  new Attachment_2Model(req)
    .createWithAttachment_2Detail(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

}
