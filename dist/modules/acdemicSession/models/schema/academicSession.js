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
exports.AcademicSession = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let AcademicSession = class AcademicSession extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AcademicSession.prototype, "session", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AcademicSession.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], AcademicSession.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], AcademicSession.prototype, "periodic", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], AcademicSession.prototype, "startDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], AcademicSession.prototype, "endDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AcademicSession.prototype, "sortOrder", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AcademicSession.prototype, "nextSession", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], AcademicSession.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AcademicSession.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AcademicSession.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AcademicSession.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AcademicSession.prototype, "updatedBy", void 0);
AcademicSession = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'AcademicSession' })
], AcademicSession);
exports.AcademicSession = AcademicSession;
