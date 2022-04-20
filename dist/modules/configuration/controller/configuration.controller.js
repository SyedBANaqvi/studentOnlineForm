"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationController = void 0;
const configuration_model_1 = require("../models/configuration.model");
const error_handler_1 = require("../../base/conf/error-handler");
class ConfigurationController {
    constructor() { }
    find(req, res, next) {
        let id = req.params.id;
        new configuration_model_1.ConfigurationModel(req)
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
        new configuration_model_1.ConfigurationModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    parentKeyWithDetail(req, res, next) {
        new configuration_model_1.ConfigurationModel(req)
            .parentKeyWithDetail()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    parentKeyToFindTehsil(req, res, next) {
        new configuration_model_1.ConfigurationModel(req)
            .parentKeyToFindTehsil()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    parentKeyToFindProvince(req, res, next) {
        new configuration_model_1.ConfigurationModel(req)
            .parentKeyToFindProvince()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    keyToFindAdmissionTypes(req, res, next) {
        new configuration_model_1.ConfigurationModel(req)
            .keyToFindAdmissionTypes()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.ConfigurationController = ConfigurationController;
