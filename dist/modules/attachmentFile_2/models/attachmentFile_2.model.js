"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentFile_2Model = void 0;
const base_model_1 = require("../../base/models/base.model");
const error_handler_1 = require("../../base/conf/error-handler");
const attachmentFile_2_1 = require("./schema/attachmentFile_2");
class AttachmentFile_2Model extends base_model_1.BaseModel {
    constructor(req) {
        super(req, attachmentFile_2_1.AttachmentFile_2);
    }
    list() {
        return this.findAll(['']);
    }
    //   public createWithDetail() {
    //     return this.findAllByConditions(['id','session','periodic'], { : item.campusId, campusName: item.campusName })
    //   }
    createWithAttachmentFile_2Detail(item) {
        return new AttachmentFile_2Model(this.req).findByCondition(null, { originalName: item.originalName, name: item.name,
            path: item.path, size: item.size, type: item.type }).then(res => {
            if (res) {
                return error_handler_1.ErrorHandler.duplicateEntry;
            }
            else {
                return new AttachmentFile_2Model(this.req).create(item);
            }
        });
    }
}
exports.AttachmentFile_2Model = AttachmentFile_2Model;
