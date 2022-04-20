"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const academicSession_1 = require("../../acdemicSession/models/schema/academicSession");
const attachmentFile_2_1 = require("../../attachmentFile_2/models/schema/attachmentFile_2");
const attachment_2_1 = require("../../attachment_2/models/schema/attachment_2");
const campus_1 = require("../../campus/models/schema/campus");
const campusProgram_1 = require("../../campusProgram/models/schema/campusProgram");
const configuration_1 = require("../../configuration/models/schema/configuration");
const country_1 = require("../../country/models/schema/country");
const program_1 = require("../../program/models/schema/program");
const programDetail_1 = require("../../programDetail/models/schema/programDetail");
const studentAcademicRecord_1 = require("../../studentAcademicRecord/models/schema/studentAcademicRecord");
const studentForm_1 = require("../../studentForm/models/schema/studentForm");
class Connection {
    constructor() { }
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let SEQ_CONNECTION_OPTIONS = {
                    dialect: "mssql",
                    host: "localhost",
                    logQueryParameters: true,
                    dialectOptions: {
                        options: {
                            requestTimeout: 300000
                        }
                    },
                    // logging: false,
                    pool: {
                        max: 5,
                        min: 0,
                        acquire: 60000,
                        idle: 20000, // The maximum time, in millisecond, that pool will try to get connection before throwing error.
                    }
                };
                this.sequelize = new sequelize_typescript_1.Sequelize("idrak_bns", "sa", "syedbilal@12345", SEQ_CONNECTION_OPTIONS);
                this.sequelize.authenticate()
                    .then(() => {
                    console.log("Connect has been established successfully");
                })
                    .catch(err => {
                    console.log("Unable to connect to the database:", err);
                });
                this.sequelize.addModels([
                    country_1.country,
                    campus_1.campus,
                    campusProgram_1.CampusProgram,
                    program_1.Program,
                    programDetail_1.ProgramDetail,
                    configuration_1.Configuration,
                    academicSession_1.AcademicSession,
                    studentForm_1.StudentForm,
                    studentAcademicRecord_1.StudentAcademicRecord,
                    attachment_2_1.Attachment_2,
                    attachmentFile_2_1.AttachmentFile_2
                ]);
                return this.sequelize;
            }
            catch (error) {
                console.log("-----------------------------------------------------------------------------");
                console.log("some error", error);
                console.log("-----------------------------------------------------------------------------");
            }
        });
    }
}
exports.Connection = Connection;
