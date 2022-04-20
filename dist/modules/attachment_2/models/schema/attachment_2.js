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
exports.Attachment_2 = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const attachmentFile_2_1 = require("../../../attachmentFile_2/models/schema/attachmentFile_2");
let Attachment_2 = class Attachment_2 extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Attachment_2.prototype, "parent", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Attachment_2.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Attachment_2.prototype, "deleted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Attachment_2.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Attachment_2.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Attachment_2.prototype, "createdBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Attachment_2.prototype, "updatedBy", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => attachmentFile_2_1.AttachmentFile_2, {
        foreignKey: 'attachment_2_Id',
        sourceKey: 'id'
    }),
    __metadata("design:type", attachmentFile_2_1.AttachmentFile_2)
], Attachment_2.prototype, "attachmentFile_2", void 0);
Attachment_2 = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'Attachment_2' })
], Attachment_2);
exports.Attachment_2 = Attachment_2;
