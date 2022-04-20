"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademicRecordModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const error_handler_1 = require("../../base/conf/error-handler");
const studentAcademicRecord_1 = require("./schema/studentAcademicRecord");
class StudentAcademicRecordModel extends base_model_1.BaseModel {
    createWithFormDetail(body) {
        throw new Error('Method not implemented.');
    }
    constructor(req) {
        super(req, studentAcademicRecord_1.StudentAcademicRecord);
    }
    list() {
        return this.findAll(['id', 'rollNo', 'obtainedMarks', 'percentage', 'board']);
    }
    createWithAcademicRecordDetail(item) {
        return new StudentAcademicRecordModel(this.req).findByCondition(null, { rollNo: item.rollNo, obtainedMarks: item.obtainedMarks, percentage: item.percentage, board: item.board }).then(res => {
            if (res) {
                return error_handler_1.ErrorHandler.duplicateEntry;
            }
            else {
                return new StudentAcademicRecordModel(this.req).create(item);
            }
        });
    }
}
exports.StudentAcademicRecordModel = StudentAcademicRecordModel;
