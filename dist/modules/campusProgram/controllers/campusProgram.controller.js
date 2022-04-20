"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusProgramController = void 0;
const campusProgram_model_1 = require("../models/campusProgram.model");
const error_handler_1 = require("../../base/conf/error-handler");
class CampusProgramController {
    constructor() { }
    find(req, res, next) {
        let id = req.params.id;
        new campusProgram_model_1.CampusProgramModel(req)
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
        new campusProgram_model_1.CampusProgramModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.CampusProgramController = CampusProgramController;
