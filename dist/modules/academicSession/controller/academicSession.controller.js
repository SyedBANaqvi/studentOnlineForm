"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSessionControllers = void 0;
const error_handler_1 = require("../../../conf/error-handler");
const academicSession_model_1 = require("../models/academicSession.model");
class AcademicSessionControllers {
    constructor() { }
    find(req, res, next) {
        console.log("inside controller");
        let id = req.params.id;
        new academicSession_model_1.AcademicSessionModel(req)
            .find(req.body)
            .then(result => {
            console.log("function completed", result);
            res.json(result);
        })
            .catch(err => {
            res.json(err.Message);
        });
    }
    hello(req, res, next) {
        console.log("called");
        return res.send("Hello");
    }
    list(req, res, next) {
        new academicSession_model_1.AcademicSessionModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.AcademicSessionControllers = AcademicSessionControllers;
