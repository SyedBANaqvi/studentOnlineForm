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
exports.CampusProgram = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const program_1 = require("../../../program/models/schema/program");
let CampusProgram = class CampusProgram extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CampusProgram.prototype, "campusId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CampusProgram.prototype, "programId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CampusProgram.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CampusProgram.prototype, "updatedAy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CampusProgram.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CampusProgram.prototype, "updatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], CampusProgram.prototype, "deleted", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => program_1.Program, {
        foreignKey: 'programId',
        targetKey: 'id'
    }),
    __metadata("design:type", program_1.Program)
], CampusProgram.prototype, "program", void 0);
CampusProgram = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'CampusProgram' })
], CampusProgram);
exports.CampusProgram = CampusProgram;
