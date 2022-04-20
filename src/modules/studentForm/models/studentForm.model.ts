import * as fs from "fs";
const multer = require("multer");
import { BaseModel } from "../../base/models/base.model";
import { StudentForm } from "./schema/studentForm";
import { ErrorHandler } from "../../base/conf/error-handler";
import { StudentAcademicRecordModel } from "../../studentAcademicRecord/models/studentAcademicRecord.model";
import { Attachment_2Model } from "../../attachment_2/models/attachment_2.model";
import { AttachmentFile_2Model } from "../../attachmentFile_2/models/attachmentFile_2.model";
import { Promise } from "bluebird";
import { includes, size } from "lodash";
import { StudentAcademicRecord } from "../../studentAcademicRecord/models/schema/studentAcademicRecord";
import { Attachment_2 } from "../../attachment_2/models/schema/attachment_2";
import { AttachmentFile_2 } from "../../attachmentFile_2/models/schema/attachmentFile_2";
const path = require("path");

export class StudentFormModel extends BaseModel {
  constructor(req: any) {
    super(req, StudentForm);
  }
  studentFormList(reqQuery) {
    let includeObj = [
      {
        model: StudentAcademicRecord,as: "studentAcademicRecord",attributes: null,where: BaseModel.cb(),required: true,
      },
    ];
    
    console.log(reqQuery['offset'],"++++++++++++++++++++");
    console.log(reqQuery['limit'],"==================");
    return super.findAndCountAll(
      ["id", "cnicId", "name", "guardianName", "guardianCnic"],null,includeObj,null, {
        offset: parseInt(reqQuery['offset']),
        limit: parseInt(reqQuery['limit'])
      }
      
      
      );
    }


  findStudentInfo(id) {
    let includeObj1 = [
      {
        model: StudentAcademicRecord,as: "studentAcademicRecord", attributes: null, where: BaseModel.cb(), required: true,
      },
    ];
    return this.find(id, null, includeObj1);
  }

  studentPictureDetail(id) {
    let includeObj2 = [
      {
        model: Attachment_2,
        as: "attachment_2",
        attributes: ["parent", "parentId"],
        where: BaseModel.cb({ parent: "student" }),
        required: true,
        include: [
          {
            model: AttachmentFile_2,
            as: "attachmentFile_2",
            attributes: ["name", "path"],
            where: BaseModel.cb(),
            required: true,
          },
        ],
      },
    ];

    return this.find(id, null, includeObj2).then((res) => {
      console.log(
        "I am includeObj2?????????????????",
        res["attachment_2"][0]["attachmentFile_2"][0]["path"]
      );
      console.log(
        path.resolve(res["attachment_2"][0]["attachmentFile_2"][0]["path"]),
        res["attachment_2"][0]["attachmentFile_2"][0]["name"]
      );
      return path.resolve(
        res["attachment_2"][0]["attachmentFile_2"][0]["path"]
      );
    });
  }

  private validateGuardianMobile(item) {
    return new Promise((res, rej) => {
      return this.findAndCountAll(["id", "guardianMobileNumber"], {
        guardianMobileNumber: item.guardianMobileNumber,
      }).then((foundMobileNumber) => {
        return foundMobileNumber.count < 3
          ? res("guardianMobileNumber is valid")
          : rej({ err: "err guardianMobileNumber is not Valid" });
      });
    });
  }

  private validateStudentCnic(item) {
    return new Promise((res, rej) => {
      return this.findAndCountAll(["id"], {
        cnicId:
          item.cnicId == null && item.cnicType == "passport"
            ? item.passport
            : item.cnicId,
      }).then((foundCnic) => {
        return foundCnic.count == 0
          ? res("studentCnic is Valid")
          : rej({ err: "err studentCnic is not Valid" });
      });
    });
  }

  private validateGuardianCnic(item) {
    return new Promise((res, rej) => {
      return this.findAndCountAll(["id"], {
        guardianCnic: item.guardianCnic,
      }).then((foundguardianCnic) => {
        return foundguardianCnic.count < 4
          ? res(" guardianCnic is Valid")
          : rej({ err: "err  guardianCnic is not Valid" });
      });
    });
  }
  public  deleteStudentForm(id) {
    return super.deleteByConditions({id:id}).then(() => {

      return new StudentAcademicRecordModel(this.req).deleteByConditions({studentId:id}).then(() => {
        return new Attachment_2Model(this.req).findByCondition(['id'],{parentId:id}).then(res=>{

          let attachmentId=res['id']

          return new Attachment_2Model(this.req).deleteByConditions({parentId:id}).then((res) => {

            // console.log("????????????id is"+id,res);
            
            return new AttachmentFile_2Model(this.req).deleteByConditions({attachment_2_Id:attachmentId})
          })
        })


    })
  })
  }
  public updateStudentForm(id, item) {
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
      domicileTehsil:
        item.domicileTehsil == undefined ? "null" : item.domicileTehsil,
      campusId: item.campusId,
      programDetailId: item.programDetailId,
    };

    return this.update(id, obj) 
    .then((updated) => {
      console.log("success 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");

      let i =0
      return new Promise.each(
        item.studentAcademicRecord,
        (e) => {
          let studentFormData = {
            rollNo: e.rollNo,
            obtainedMarks: e.obtainedMarks,
            percentage: e.percentage,
            board: e.board,
            studentId: updated["id"],
          };
          console.log("\nValue of aqid is",item.studentAcademicRecord[i].id);
          
          return new StudentAcademicRecordModel(
            this.req
          ).update(item.studentAcademicRecord[i].id,studentFormData).then(res=>{
            i=i+1
          })
        }
      ).then(() => {
        console.log("success 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        let studentFormData = {
          studentId: updated["id"],
        };
        return studentFormData;
      });
    })
   
    
  }

  public createWithFormDetail(item) {
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
      domicileTehsil:
        item.domicileTehsil == undefined ? "null" : item.domicileTehsil,
      campusId: item.campusId,
      programDetailId: item.programDetailId,
    };
    console.log("this is session>>>>>>>>>>>>1", item.session);

    let studentForm;

    return this.findAllByConditions(null, obj).then(() => {
      return this.validateGuardianMobile(item).then(
        () => {
          return this.validateStudentCnic(item).then(
            () => {
              return this.validateGuardianCnic(item).then(
                () => {
                  return this.create(obj)
                    .then((created) => {
                      console.log("success 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                      return new Promise.each(
                        item.studentAcademicRecord,
                        (e) => {
                          let studentFormData = {
                            rollNo: e.rollNo,
                            obtainedMarks: e.obtainedMarks,
                            percentage: e.percentage,
                            board: e.board,
                            studentId: created["id"],
                          };

                          return new StudentAcademicRecordModel(
                            this.req
                          ).create(studentFormData);
                        }
                      ).then(() => {
                        console.log("success 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");

                        let studentFormData = {
                          studentId: created["id"],
                        };
                        return studentFormData;
                      });
                    })
                    .catch((err) => err);
                },
                (err) => {
                  return err;
                }
              );
            },
            (err) => {
              return err;
            }
          );
        },
        (rej) => {
          return rej;
        }
      );
    });
  }


  public uploadTest(req, res, id) {
    let data;
    let fileName = null;
    let fileSize = null;
    let fileType = null;

    return new Promise((resolve, reject) => {
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
        } else {
          reject(err);
        }
      });
    })
      .then(() => {
        let itemObj = {
          parent: this.req.body["parent"],
          parentId: this.req.body["parentId"],
        };
        return new Attachment_2Model(this.req).createWithAttachment_2Detail(
          itemObj
        );
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

        return new AttachmentFile_2Model(
          this.req
        ).createWithAttachmentFile_2Detail(itemObj1);
      });
  }
}
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
