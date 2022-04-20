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
exports.Program = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const programDetail_1 = require("../../../programDetail/models/schema/programDetail");
let Program = class Program extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Program.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Program.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Program.prototype, "educationLevelId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "abbreviation", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "showCreditHours", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "showCourseCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "classCaption", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "sessionType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "studentAutoWithdraw", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Program.prototype, "studentAutoWithdraw_AbsentCount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Program.prototype, "arrearAdjustment", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "showCourseOrder", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Program.prototype, "useMSForm", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => programDetail_1.ProgramDetail, {
        foreignKey: 'programId',
        sourceKey: 'id'
    }),
    __metadata("design:type", Array)
], Program.prototype, "programDetail", void 0);
Program = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'Program' })
], Program);
exports.Program = Program;
