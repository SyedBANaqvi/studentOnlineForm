"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusControllers = void 0;
const campus_model_1 = require("../models/campus.model");
const error_handler_1 = require("../../base/conf/error-handler");
class CampusControllers {
    constructor() { }
    find(req, res, next) {
        console.log("inside controller");
        let id = req.params.id;
        new campus_model_1.CampusModel(req)
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
        new campus_model_1.CampusModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.CampusControllers = CampusControllers;
