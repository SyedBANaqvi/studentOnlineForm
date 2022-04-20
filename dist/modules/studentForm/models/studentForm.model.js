"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFormModel = void 0;
const multer = require("multer");
const base_model_1 = require("../../base/models/base.model");
const studentForm_1 = require("./schema/studentForm");
const studentAcademicRecord_model_1 = require("../../studentAcademicRecord/models/studentAcademicRecord.model");
const attachment_2_model_1 = require("../../attachment_2/models/attachment_2.model");
const attachmentFile_2_model_1 = require("../../attachmentFile_2/models/attachmentFile_2.model");
const bluebird_1 = require("bluebird");
const studentAcademicRecord_1 = require("../../studentAcademicRecord/models/schema/studentAcademicRecord");
const attachment_2_1 = require("../../attachment_2/models/schema/attachment_2");
const attachmentFile_2_1 = require("../../attachmentFile_2/models/schema/attachmentFile_2");
const path = require("path");
class StudentFormModel extends base_model_1.BaseModel {
    constructor(req) {
        super(req, studentForm_1.StudentForm);
    }
    studentFormList(reqQuery) {
        let includeObj = [
            {
                model: studentAcademicRecord_1.StudentAcademicRecord, as: "studentAcademicRecord", attributes: null, where: base_model_1.BaseModel.cb(), required: true,
            },
        ];
        console.log(reqQuery['offset'], "++++++++++++++++++++");
        console.log(reqQuery['limit'], "==================");
        return super.findAndCountAll(["id", "cnicId", "name", "guardianName", "guardianCnic"], null, includeObj, null, {
            offset: parseInt(reqQuery['offset']),
            limit: parseInt(reqQuery['limit'])
        });
    }
    findStudentInfo(id) {
        let includeObj1 = [
            {
                model: studentAcademicRecord_1.StudentAcademicRecord, as: "studentAcademicRecord", attributes: null, where: base_model_1.BaseModel.cb(), required: true,
            },
        ];
        return this.find(id, null, includeObj1);
    }
    studentPictureDetail(id) {
        let includeObj2 = [
            {
                model: attachment_2_1.Attachment_2,
                as: "attachment_2",
                attributes: ["parent", "parentId"],
                where: base_model_1.BaseModel.cb({ parent: "student" }),
                required: true,
                include: [
                    {
                        model: attachmentFile_2_1.AttachmentFile_2,
                        as: "attachmentFile_2",
                        attributes: ["name", "path"],
                        where: base_model_1.BaseModel.cb(),
                        required: true,
                    },
                ],
            },
        ];
        return this.find(id, null, includeObj2).then((res) => {
            console.log("I am includeObj2?????????????????", res["attachment_2"][0]["attachmentFile_2"][0]["path"]);
            console.log(path.resolve(res["attachment_2"][0]["attachmentFile_2"][0]["path"]), res["attachment_2"][0]["attachmentFile_2"][0]["name"]);
            return path.resolve(res["attachment_2"][0]["attachmentFile_2"][0]["path"]);
        });
    }
    validateGuardianMobile(item) {
        return new bluebird_1.Promise((res, rej) => {
            return this.findAndCountAll(["id", "guardianMobileNumber"], {
                guardianMobileNumber: item.guardianMobileNumber,
            }).then((foundMobileNumber) => {
                return foundMobileNumber.count < 3
                    ? res("guardianMobileNumber is valid")
                    : rej({ err: "err guardianMobileNumber is not Valid" });
            });
        });
    }
    validateStudentCnic(item) {
        return new bluebird_1.Promise((res, rej) => {
            return this.findAndCountAll(["id"], {
                cnicId: item.cnicId == null && item.cnicType == "passport"
                    ? item.passport
                    : item.cnicId,
            }).then((foundCnic) => {
                return foundCnic.count == 0
                    ? res("studentCnic is Valid")
                    : rej({ err: "err studentCnic is not Valid" });
            });
        });
    }
    validateGuardianCnic(item) {
        return new bluebird_1.Promise((res, rej) => {
            return this.findAndCountAll(["id"], {
                guardianCnic: item.guardianCnic,
            }).then((foundguardianCnic) => {
                return foundguardianCnic.count < 4
                    ? res(" guardianCnic is Valid")
                    : rej({ err: "err  guardianCnic is not Valid" });
            });
        });
    }
    deleteStudentForm(id) {
        return super.deleteByConditions({ id: id }).then(() => {
            return new studentAcademicRecord_model_1.StudentAcademicRecordModel(this.req).deleteByConditions({ studentId: id }).then(() => {
                return new attachment_2_model_1.Attachment_2Model(this.req).findByCondition(['id'], { parentId: id }).then(res => {
                    let attachmentId = res['id'];
                    return new attachment_2_model_1.Attachment_2Model(this.req).deleteByConditions({ parentId: id }).then((res) => {
                        // console.log("????????????id is"+id,res);
                        return new attachmentFile_2_model_1.AttachmentFile_2Model(this.req).deleteByConditions({ attachment_2_Id: attachmentId });
                    });
                });
            });
        });
    }
    updateStudentForm(id, item) {
        let obj = {
            session: item.session,
            month: item.month,
            year: item.year,
            admissionDate: item.admissionDate,
            name: item.name,
            dob: item.dob,
            gender: item.gender,
            markOfIdentification: item.markOfIdentification,
            countryCode: item.countryCode,
            mobileNumber: item.mobileNumber,
            email: item.email,
            cnicType: item.cnicType,
            cnicId: item.cnicId == null ? item.passport : item.cnicId,
            religion: item.religion,
            nationality: item.nationality,
            emergencyContactCode: item.emergencyContactCode,
            emergencyContactNumber: item.emergencyContactNumber,
            postalCity: item.postalCity,
            postalAddress: item.postalAddress,
            permanentCity: item.permanentCity,
            permanentAddress: item.permanentAddress,
            domicileCity: item.domicileCity,
            domicileProvince: item.domicileProvince,
            admissionType: item.admissionType,
            guardianType: item.guardianType,
            guardianName: item.guardianName,
            guardianCnic: item.guardianCnic,
            guardianCountry: item.guardianCountry,
            guardianMobileNumber: item.guardianMobileNumber,
            domicileTehsil: item.domicileTehsil == undefined ? "null" : item.domicileTehsil,
            campusId: item.campusId,
            programDetailId: item.programDetailId,
        };
        return this.update(id, obj)
            .then((updated) => {
            console.log("success 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            let i = 0;
            return new bluebird_1.Promise.each(item.studentAcademicRecord, (e) => {
                let studentFormData = {
                    rollNo: e.rollNo,
                    obtainedMarks: e.obtainedMarks,
                    percentage: e.percentage,
                    board: e.board,
                    studentId: updated["id"],
                };
                console.log("\nValue of aqid is", item.studentAcademicRecord[i].id);
                return new studentAcademicRecord_model_1.StudentAcademicRecordModel(this.req).update(item.studentAcademicRecord[i].id, studentFormData).then(res => {
                    i = i + 1;
                });
            }).then(() => {
                console.log("success 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                let studentFormData = {
                    studentId: updated["id"],
                };
                return studentFormData;
            });
        });
    }
    createWithFormDetail(item) {
        let obj = {
            session: item.session,
            month: item.month,
            year: item.year,
            admissionDate: item.admissionDate,
            name: item.name,
            dob: item.dob,
            gender: item.gender,
            markOfIdentification: item.markOfIdentification,
            countryCode: item.countryCode,
            mobileNumber: item.mobileNumber,
            email: item.email,
            cnicType: item.cnicType,
            cnicId: item.cnicId == null ? item.passport : item.cnicId,
            religion: item.religion,
            nationality: item.nationality,
            emergencyContactCode: item.emergencyContactCode,
            emergencyContactNumber: item.emergencyContactNumber,
            postalCity: item.postalCity,
            postalAddress: item.postalAddress,
            permanentCity: item.permanentCity,
            permanentAddress: item.permanentAddress,
            domicileCity: item.domicileCity,
            domicileProvince: item.domicileProvince,
            admissionType: item.admissionType,
            guardianType: item.guardianType,
            guardianName: item.guardianName,
            guardianCnic: item.guardianCnic,
            guardianCountry: item.guardianCountry,
            guardianMobileNumber: item.guardianMobileNumber,
            domicileTehsil: item.domicileTehsil == undefined ? "null" : item.domicileTehsil,
            campusId: item.campusId,
            programDetailId: item.programDetailId,
        };
        console.log("this is session>>>>>>>>>>>>1", item.session);
        let studentForm;
        return this.findAllByConditions(null, obj).then(() => {
            return this.validateGuardianMobile(item).then(() => {
                return this.validateStudentCnic(item).then(() => {
                    return this.validateGuardianCnic(item).then(() => {
                        return this.create(obj)
                            .then((created) => {
                            console.log("success 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                            return new bluebird_1.Promise.each(item.studentAcademicRecord, (e) => {
                                let studentFormData = {
                                    rollNo: e.rollNo,
                                    obtainedMarks: e.obtainedMarks,
                                    percentage: e.percentage,
                                    board: e.board,
                                    studentId: created["id"],
                                };
                                return new studentAcademicRecord_model_1.StudentAcademicRecordModel(this.req).create(studentFormData);
                            }).then(() => {
                                console.log("success 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                                let studentFormData = {
                                    studentId: created["id"],
                                };
                                return studentFormData;
                            });
                        })
                            .catch((err) => err);
                    }, (err) => {
                        return err;
                    });
                }, (err) => {
                    return err;
                });
            }, (rej) => {
                return rej;
            });
        });
    }
    uploadTest(req, res, id) {
        let data;
        let fileName = null;
        let fileSize = null;
        let fileType = null;
        return new bluebird_1.Promise((resolve, reject) => {
            let dir = "./uploads/studentId-" + id;
            let storage = multer.diskStorage({
                destination: dir,
                filename: (req, file, cb) => {
                    cb(null, Date.now() + "-" + file.originalname);
                },
            });
            let upload = multer({
                storage: storage,
            }).single("files");
            upload(req, res, (err) => {
                if (!err) {
                    // fileName = req["file"].filename;
                    // fileSize = req["file"].size
                    // fileType = req["file"].mimetype
                    // data = { campusId: req.body["campusId"], file: fileName }
                    resolve(true);
                }
                else {
                    reject(err);
                }
            });
        })
            .then(() => {
            let itemObj = {
                parent: this.req.body["parent"],
                parentId: this.req.body["parentId"],
            };
            return new attachment_2_model_1.Attachment_2Model(this.req).createWithAttachment_2Detail(itemObj);
        })
            .then((itemObj) => {
            let itemObj1 = {
                attachment_2_Id: itemObj["id"],
                originalName: this.req["file"]["originalname"],
                name: this.req["file"]["filename"],
                path: this.req["file"]["path"],
                size: this.req["file"]["size"],
                type: this.req.body["type"],
            };
            return new attachmentFile_2_model_1.AttachmentFile_2Model(this.req).createWithAttachmentFile_2Detail(itemObj1);
        });
    }
}
exports.StudentFormModel = StudentFormModel;
//         return this.findAndCountAll(['id','guardianMobileNumber'],{ guardianMobileNumber: item.guardianMobileNumber}).then(foundMobileNumber=>{
//             if(foundMobileNumber.count < 3){
//                 return this.findAndCountAll(['id'],{ cnicId: (item.studentCnic==null && item.passportRadio =='passport')?item.passport:item.studentCnic}).then(foundCnic=>{
//                     if(foundCnic.count == 0){
//                         return this.findAndCountAll(['id'],{  guardianCnic: item.guardianCNIC}).then(foundguardianCnic=>{
//                         if(foundguardianCnic.count < 4){
//                             return this.create(obj).then(created=>{
//                                 return created
//                             })
//                         }else{
//                         return {err: "guardian Cnic is invalid"}
//                         }
//                         })
//                     }else{
//                     return {err: "found student enrolled in another program"}
//                     }
//                 })
//             }else{
//                 return {err: "found guardian Mobile number, kisndly provide different number"}
//             }
//             else{
//             return {msg:"this is more then 3"}
//             }
//         })
//     }
// })
// }
// }
//     .then(res => {
//     if (res) {
//         return ErrorHandler.duplicateEntry;
//       } else {
//         return this.create(item);
//       }
//     })
// return this.create(item);
//   }
// }
