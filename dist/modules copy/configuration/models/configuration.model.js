"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const configuration_1 = require("./schema/configuration");
class ConfigurationModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, configuration_1.Configuration);
    }
    list() {
        return this.findAll(['id', 'value', 'parentKey']);
    }
    parentKeyWithDetail() {
        return this.findAllByConditions(['id', 'value', 'parentKey'], { parentKey: 'city' });
    }
    parentKeyToFindTehsil() {
        return this.findAllByConditions(['id', 'value', 'parentKey'], { parentKey: 'tehsil' });
    }
    keyToFindAdmissionTypes() {
        return this.findAllByConditions(['id', 'value', 'parentKey'], { key: 'admission_types' });
    }
}
exports.ConfigurationModel = ConfigurationModel;
