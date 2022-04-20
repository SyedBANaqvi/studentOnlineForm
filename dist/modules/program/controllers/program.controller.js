"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramControllers = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const program_model_1 = require("../models/program.model");
class ProgramControllers {
    constructor() { }
    find(req, res, next) {
        let id = req.params.id;
        new program_model_1.ProgramModel(req)
            .find(req.body)
            .then(result => {
            res.json(result);
        })
            .catch(err => {
            res.json(err.Message);
        });
    }
    hello(req, res, next) {
        return res.send("Hello");
    }
    list(req, res, next) {
        new program_model_1.ProgramModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.ProgramControllers = ProgramControllers;
