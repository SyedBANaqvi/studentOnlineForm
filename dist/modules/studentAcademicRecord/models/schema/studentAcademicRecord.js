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
exports.StudentAcademicRecord = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let StudentAcademicRecord = class StudentAcademicRecord extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentAcademicRecord.prototype, "rollNo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentAcademicRecord.prototype, "obtainedMarks", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentAcademicRecord.prototype, "percentage", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], StudentAcademicRecord.prototype, "board", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentAcademicRecord.prototype, "studentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], StudentAcademicRecord.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], StudentAcademicRecord.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentAcademicRecord.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], StudentAcademicRecord.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], StudentAcademicRecord.prototype, "deleted", void 0);
StudentAcademicRecord = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'StudentAcademicRecord' })
], StudentAcademicRecord);
exports.StudentAcademicRecord = StudentAcademicRecord;
