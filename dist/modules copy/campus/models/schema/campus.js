"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const campusProgram_1 = require("../../../campusProgram/models/schema/campusProgram");
let campus = class campus extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "campusId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "CRApplicationId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "codeNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "campusName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "mobileNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "landLineNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], campus.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], campus.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "academicMonth", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "academicYear", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], campus.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "cityId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "campusTitle", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "challanTemplate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], campus.prototype, "blockPortals", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => campusProgram_1.CampusProgram, {
        foreignKey: 'campusId',
        sourceKey: 'id'
    }),
    __metadata("design:type", Array)
], campus.prototype, "campusProgram", void 0);
campus = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'Campus' })
], campus);
exports.campus = campus;
