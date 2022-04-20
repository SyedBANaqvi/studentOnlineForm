import { LOADIPHLPAPI } from 'dns';
import * as express from 'express';

import { ErrorHandler } from '../../base/conf/error-handler';
import { StudentFormModel } from '../models/studentForm.model';

export class StudentFormController {
  constructor() { }

  hello(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    return res.send("Hello")
  }
// public list(req: express.Request, res: express.Response, next: express.NextFunction) {
//   new StudentFormModel(req)
//     .list()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       ErrorHandler.sendServerError(req, err, res, next);
//     });
// }
public create(req: express.Request, res: express.Response, next: express.NextFunction) {
  
  new StudentFormModel(req)
    .createWithFormDetail(req.body).then(result => {
      console.log("result is>>>>>>>>>>>>>",result);
      
      return res.json(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

public pic(req: express.Request, res: express.Response, next: express.NextFunction) {
  let id=req.params.id;
  
  new StudentFormModel(req).uploadTest(req,res,id).then(result => {
      
      return res.json(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

public studentList(req: express.Request, res: express.Response, next: express.NextFunction) {
  
  console.log(req.query,"++++++++++++++++++++++++")

  new StudentFormModel(req)
    
  .studentFormList(req.query)
    
    
  .then(result => res.json(result))
 
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public find(req: express.Request, res: express.Response, next: express.NextFunction) {
//   let {page,size}=req.query;
//   if(!page){
//   page='1';
// }
// if(!size){
//     size='10'
//   }
//   const limit=parseInt(size)
  new StudentFormModel(req)
  .findStudentInfo(req.params.id)
  .then(result => {
    res.send(result);
  })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public pictureDetail(req: express.Request, res: express.Response, next: express.NextFunction) {
  new StudentFormModel(req)
    .studentPictureDetail(req.params.id)
    .then(result => {
      res.sendFile(result);
    })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
public updateForm(req: express.Request, res: express.Response, next: express.NextFunction) {
  new StudentFormModel(req)

    .updateStudentForm(req.params.id, req.body)
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}

public deleteForm(req: express.Request, res: express.Response, next: express.NextFunction) {
  
  new StudentFormModel(req)
  .deleteStudentForm(req.params.id).then(result => {
    
    res.send(result);
  })
    .catch(err => {
      ErrorHandler.sendServerError(req, err, res, next);
    });
}
}



