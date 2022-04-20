"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const campus_1 = require("./schema/campus");
const campusProgram_1 = require("../../campusProgram/models/schema/campusProgram");
const program_1 = require("../../program/models/schema/program");
const programDetail_1 = require("../../programDetail/models/schema/programDetail");
class CampusModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, campus_1.campus);
    }
    list() {
        let includeObj = [
            { model: campusProgram_1.CampusProgram, as: 'campusProgram', attributes: ['campusId', 'programId'], where: base_model_1.BaseModel.cb(), required: true,
                include: [
                    { model: program_1.Program, as: 'program', attributes: ['name', 'abbreviation'], where: base_model_1.BaseModel.cb(), required: true,
                        include: [
                            { model: programDetail_1.ProgramDetail, as: 'programDetail', attributes: ['name', 'programId'], where: base_model_1.BaseModel.cb(), required: true }
                        ]
                    }
                ]
            }
        ];
        return this.findAll(['id', 'campusId', 'campusName'], null, includeObj);
    }
}
exports.CampusModel = CampusModel;
