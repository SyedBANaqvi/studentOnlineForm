"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusProgramModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const campusProgram_1 = require("./schema/campusProgram");
class CampusProgramModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, campusProgram_1.CampusProgram);
    }
    list() {
        return this.findAll(['id', 'campusId', 'programId']);
    }
}
exports.CampusProgramModel = CampusProgramModel;
