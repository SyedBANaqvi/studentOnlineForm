import { LOADIPHLPAPI } from 'dns';
import * as express from 'express';

import { ErrorHandler } from '../../base/conf/error-handler';
import { StudentAcademicRecordModel } from '../models/studentAcademicRecord.model';

export class StudentAcademicRecordController {
  constructor() { }

  hello(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    return res.send("Hello")
  }
public list(req: express.Request, res: express.Response, next: express.NextFunction) {
  new StudentAcademicRecordModel(req)
    .list()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public create(req: express.Request, res: express.Response, next: express.NextFunction) {
  
  new StudentAcademicRecordModel(req)
    .createWithAcademicRecordDetail(req.body).then(result => {
      
      return res.json(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}


}
