"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFormController = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const studentForm_model_1 = require("../models/studentForm.model");
class StudentFormController {
    constructor() { }
    hello(req, res, next) {
        return res.send("Hello");
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
    create(req, res, next) {
        new studentForm_model_1.StudentFormModel(req)
            .createWithFormDetail(req.body).then(result => {
            console.log("result is>>>>>>>>>>>>>", result);
            return res.json(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    pic(req, res, next) {
        let id = req.params.id;
        new studentForm_model_1.StudentFormModel(req).uploadTest(req, res, id).then(result => {
            return res.json(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    studentList(req, res, next) {
        console.log(req.query, "++++++++++++++++++++++++");
        new studentForm_model_1.StudentFormModel(req)
            .studentFormList(req.query)
            .then(result => res.json(result))
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    find(req, res, next) {
        //   let {page,size}=req.query;
        //   if(!page){
        //   page='1';
        // }
        // if(!size){
        //     size='10'
        //   }
        //   const limit=parseInt(size)
        new studentForm_model_1.StudentFormModel(req)
            .findStudentInfo(req.params.id)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    pictureDetail(req, res, next) {
        new studentForm_model_1.StudentFormModel(req)
            .studentPictureDetail(req.params.id)
            .then(result => {
            res.sendFile(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    updateForm(req, res, next) {
        new studentForm_model_1.StudentFormModel(req)
            .updateStudentForm(req.params.id, req.body)
            .then(result => {
            console.log(result);
            res.send(result);
        })
            .catch((err) => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    deleteForm(req, res, next) {
        new studentForm_model_1.StudentFormModel(req)
            .deleteStudentForm(req.params.id).then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.StudentFormController = StudentFormController;
