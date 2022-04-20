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
exports.StudentForm = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const attachment_2_1 = require("../../../attachment_2/models/schema/attachment_2");
const studentAcademicRecord_1 = require("../../../studentAcademicRecord/models/schema/studentAcademicRecord");
let StudentForm = class StudentForm extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "session", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "month", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "year", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], StudentForm.prototype, "admissionDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "dob", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "markOfIdentification", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "countryCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "mobileNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "cnicType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "cnicId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "religion", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "nationality", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "emergencyContactCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "emergencyContactNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "postalCity", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "postalAddress", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "permanentCity", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "permanentAddress", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "domicileCity", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "domicileProvince", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "domicileTehsil", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "admissionType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "guardianType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "guardianName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "guardianCnic", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "guardianCountry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentForm.prototype, "guardianMobileNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentForm.prototype, "campusId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentForm.prototype, "programDetailId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], StudentForm.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], StudentForm.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentForm.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentForm.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], StudentForm.prototype, "deleted", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => studentAcademicRecord_1.StudentAcademicRecord, {
        foreignKey: 'studentId',
        sourceKey: 'id'
    }),
    __metadata("design:type", Array)
], StudentForm.prototype, "studentAcademicRecord", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => attachment_2_1.Attachment_2, {
        sourceKey: 'id',
        foreignKey: 'parentId',
    }),
    __metadata("design:type", attachment_2_1.Attachment_2)
], StudentForm.prototype, "attachment_2", void 0);
StudentForm = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'StudentForm' })
], StudentForm);
exports.StudentForm = StudentForm;
//['id','session','month','year','admissionDate','name','dob','gender','markOfIdentification','countryCode',
//     'mobileNumber','email','cnicType','cnicId','religion','nationality','emergencyContactCode','emergencyContactNumber','postalCity','postalAddress',
//     'permanentCity','permanentAddress','domicileCity','domicileProvince','domicileTehsil','admissionType','guardianType','guardianName',
//     'guardianCnic','guardianCountry','guardianMobileNumber']
