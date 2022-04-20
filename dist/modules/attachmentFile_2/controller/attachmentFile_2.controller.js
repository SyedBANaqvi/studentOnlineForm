"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentFile_2Controllers = void 0;
const error_handler_1 = require("../../base/conf/error-handler");
const attachmentFile_2_model_1 = require("../models/attachmentFile_2.model");
class AttachmentFile_2Controllers {
    constructor() { }
    find(req, res, next) {
        let id = req.params.id;
        new attachmentFile_2_model_1.AttachmentFile_2Model(req)
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
        new attachmentFile_2_model_1.AttachmentFile_2Model(req)
            .list()
            .then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
    createAttachmentFile(req, res, next) {
        new attachmentFile_2_model_1.AttachmentFile_2Model(req)
            .createWithAttachmentFile_2Detail(req.body).then(result => {
            res.send(result);
        })
            .catch(err => {
            error_handler_1.ErrorHandler.sendServerError(req, err, res, next);
        });
    }
}
exports.AttachmentFile_2Controllers = AttachmentFile_2Controllers;
