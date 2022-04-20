import * as express from 'express';

import { ErrorHandler } from '../../base/conf/error-handler';
import { AttachmentFile_2Model } from '../models/attachmentFile_2.model';
export class AttachmentFile_2Controllers {
  constructor() { }
  find(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    let id = req.params.id;

    new AttachmentFile_2Model(req)
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
  new AttachmentFile_2Model(req)
    .list()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public createAttachmentFile(req: express.Request, res: express.Response, next: express.NextFunction) {
  new AttachmentFile_2Model(req)
    .createWithAttachmentFile_2Detail(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
}
