"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSessionModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const academicSession_1 = require("./schema/academicSession");
class AcademicSessionModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, academicSession_1.AcademicSession);
    }
    list() {
        return this.findAll(['session', 'title', 'periodic']);
    }
}
exports.AcademicSessionModel = AcademicSessionModel;
