"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramDetailControllers = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const programDetail_model_1 = require("../models/programDetail.model");
class ProgramDetailControllers {
    constructor() { }
    find(req, res, next) {
        console.log("inside controller");
        let id = req.params.id;
        new programDetail_model_1.ProgramDetailModel(req)
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
        new programDetail_model_1.ProgramDetailModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.ProgramDetailControllers = ProgramDetailControllers;
