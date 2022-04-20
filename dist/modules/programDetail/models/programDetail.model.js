"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramDetailModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const programDetail_1 = require("./schema/programDetail");
class ProgramDetailModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, programDetail_1.ProgramDetail);
    }
    list() {
        //   let includeObj = [
        //       {model:CampusProgram, as: 'campusProgram',attributes:['campusId','programId'],where: BaseModel.cb({programId: {[Op.gt]:14}}),required:true}
        //   ]
        return this.findAll(['id', 'name', 'programId']);
        // ,null,includeObj
    }
}
exports.ProgramDetailModel = ProgramDetailModel;
