"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment_2Controllers = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const attachment_2_model_1 = require("../models/attachment_2.model");
class Attachment_2Controllers {
    constructor() { }
    find(req, res, next) {
        let id = req.params.id;
        new attachment_2_model_1.Attachment_2Model(req)
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
    // public list(req: express.Request, res: express.Response, next: express.NextFunction) {
    //   new Attachment_2Model(req)
    //     .list()
    //     .then(result => {
    //       res.send(result);
    //     })
    //     .catch(err => {
    //       ErrorHandler.sendServerError(req, err, res, next);
    //     });
    // }
    createAttachment(req, res, next) {
        new attachment_2_model_1.Attachment_2Model(req)
            .createWithAttachment_2Detail(req.body).then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.Attachment_2Controllers = Attachment_2Controllers;
