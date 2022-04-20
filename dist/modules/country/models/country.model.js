"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModel = void 0;
const base_model_1 = require("../../base/models/base.model");
const country_1 = require("./schema/country");
const error_handler_1 = require("../../base/conf/error-handler");
class CountryModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, country_1.country);
    }
    list() {
        return this.findAll(['id', 'code', 'abbreviation']);
    }
    createWithDetail(item) {
        return this.findByCondition(['id', 'code', 'abbreviation'], { code: item.code, abbreviation: item.abbreviation }).then(res => {
            if (res) {
                return error_handler_1.ErrorHandler.duplicateEntry;
            }
            else {
                return this.create(item);
            }
        });
    }
    updateWithDetail(id, item) {
        return this.findByCondition(['id', 'code', 'abbreviation'], { code: item.code, abbreviation: item.abbreviation }).then(res => {
            if (res) {
                return error_handler_1.ErrorHandler.duplicateEntry;
            }
            else {
                return this.update(id, item);
            }
        });
        // return  this.updateByCondition()
    }
    deleteAllDetail(id) {
        return this.delete(id).then(res => {
            return res;
        });
        // return this.delete(id).then(() => {
        //   return new CountryModel(this.req).deleteAllByConditions({ id });
        // })
    }
    findDetail(id) {
        return this.find(id, ['id', 'code', 'abbreviation']).then(res => {
            if (res) {
                return res;
            }
            else {
                return error_handler_1.ErrorHandler.notFound;
            }
        });
    }
}
exports.CountryModel = CountryModel;
