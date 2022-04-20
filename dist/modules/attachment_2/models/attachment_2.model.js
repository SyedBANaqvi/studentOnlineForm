"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment_2Model = void 0;
const base_model_1 = require("../../base/models/base.model");
const error_handler_1 = require("../../base/conf/error-handler");
const attachment_2_1 = require("./schema/attachment_2");
class Attachment_2Model extends base_model_1.BaseModel {
    constructor(req) {
        super(req, attachment_2_1.Attachment_2);
    }
    list() {
        return this.findAll(['']);
    }
    createWithAttachment_2Detail(item) {
        return new Attachment_2Model(this.req).findByCondition(null, { parent: item.parent, parentId: item.parentId }).then(res => {
            if (res) {
                return error_handler_1.ErrorHandler.duplicateEntry;
            }
            else {
                return new Attachment_2Model(this.req).create(item);
            }
        });
    }
}
exports.Attachment_2Model = Attachment_2Model;
