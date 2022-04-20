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
exports.ProgramDetail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ProgramDetail = class ProgramDetail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "programId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProgramDetail.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProgramDetail.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "abbreviation", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "graded", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "transferMaxCreditHours", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "timeTableType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "courseMaxCreditHours", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "safeAbsentCount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProgramDetail.prototype, "alarmingAbsentCount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProgramDetail.prototype, "criticalAbsentCount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "markingSchemeId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "orderNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "attendanceType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ProgramDetail.prototype, "programDuration", void 0);
ProgramDetail = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'ProgramDetail' })
], ProgramDetail);
exports.ProgramDetail = ProgramDetail;
