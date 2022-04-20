"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademicRecordController = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const studentAcademicRecord_model_1 = require("../models/studentAcademicRecord.model");
class StudentAcademicRecordController {
    constructor() { }
    hello(req, res, next) {
        return res.send("Hello");
    }
    list(req, res, next) {
        new studentAcademicRecord_model_1.StudentAcademicRecordModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    create(req, res, next) {
        new studentAcademicRecord_model_1.StudentAcademicRecordModel(req)
            .createWithAcademicRecordDetail(req.body).then(result => {
            return res.json(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.StudentAcademicRecordController = StudentAcademicRecordController;
