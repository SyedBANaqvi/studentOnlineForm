"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const country_model_1 = require("../models/country.model");
const error_handler_1 = require("../../base/conf/error-handler");
class CountryController {
    constructor() { }
    //   find(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     console.log("inside controller");
    //     let id = req.params.id;
    //     new CountryModel(req)
    //     .find( req.body)
    //       .then(result => {
    //         console.log("function completed", result);
    //       res.json(result);
    //   })
    //   .catch(err => {
    //     res.json(err.Message);
    //   });
    // }
    hello(req, res, next) {
        return res.send("Hello");
    }
    list(req, res, next) {
        new country_model_1.CountryModel(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    create(req, res, next) {
        new country_model_1.CountryModel(req)
            .createWithDetail(req.body).then(result => {
            console.log(result);
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    update(req, res, next) {
        new country_model_1.CountryModel(req)
            .updateWithDetail(req.params.id, req.body)
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    deleteAllDetail(req, res, next) {
        console.log("called before");
        new country_model_1.CountryModel(req).deleteAllDetail(req.params.id).then(result => {
            console.log("called after", result, req.params.id);
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    find(req, res, next) {
        new country_model_1.CountryModel(req)
            .findDetail(req.params.id)
            .then(result => {
            res.send(result);
        });
    }
}
exports.CountryController = CountryController;
