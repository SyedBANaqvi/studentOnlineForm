"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSessionModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const country_1 = require("./schema/country");
class AcademicSessionModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, country_1.country);
    }
    list() {
        return this.findAll(['id', 'code', 'abbreviation']);
    }
}
exports.AcademicSessionModel = AcademicSessionModel;
//   public createWithDetail(item) {
//     return this.findByCondition(['id','campusId','campusName'], { campusId: item.campusId, campusName: item.campusName }).then(res => {
//       if (res) {
//         return ErrorHandler.duplicateEntry;
//       } else {
//         return this.create(item);
//       }
//     })
//   }
