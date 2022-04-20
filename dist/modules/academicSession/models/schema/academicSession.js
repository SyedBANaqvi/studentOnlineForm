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
exports.academicSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let academicSession = class academicSession extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "campusId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "CRApplicationId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "codeNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "campusName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "mobileNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "landLineNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], academicSession.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], academicSession.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "academicMonth", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "academicYear", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], academicSession.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "cityId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "campusTitle", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "challanTemplate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], academicSession.prototype, "blockPortals", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CampusProgram, {
        foreignKey: 'campusId',
        sourceKey: 'id'
    }),
    __metadata("design:type", Array)
], academicSession.prototype, "campusProgram", void 0);
academicSession = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'AcademicSession' })
], academicSession);
exports.academicSession = academicSession;
