"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const program_1 = require("./schema/program");
class ProgramModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, program_1.Program);
    }
    list() {
        //   let includeObj = [
        //       {model:CampusProgram, as: 'campusProgram',attributes:['campusId','programId'],where: BaseModel.cb({programId: {[Op.gt]:14}}),required:true}
        //   ]
        return this.findAll(['id', 'name', 'abbreviation']);
        // ,null,includeObj
    }
}
exports.ProgramModel = ProgramModel;
