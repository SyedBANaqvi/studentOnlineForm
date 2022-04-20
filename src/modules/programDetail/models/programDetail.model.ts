import { BaseModel } from '../../base/models/base.model';
import { ProgramDetail } from './schema/programDetail';
import { ErrorHandler } from '../../base/conf/error-handler';
import { CampusProgram } from '../../campusProgram/models/schema/campusProgram';
import { Op } from 'sequelize';

export class ProgramDetailModel extends BaseModel {
  constructor(req: any) {
    super(req, ProgramDetail);
  }
  list() {
    //   let includeObj = [
    //       {model:CampusProgram, as: 'campusProgram',attributes:['campusId','programId'],where: BaseModel.cb({programId: {[Op.gt]:14}}),required:true}
    //   ]
    return this.findAll(['id','name','programId'])
    // ,null,includeObj
  }
//   public createWithDetail(item) {
//     return this.findByCondition(['id','campusId','campusName'], { campusId: item.campusId, campusName: item.campusName }).then(res => {
//       if (res) {
//         return ErrorHandler.duplicateEntry;

//       } else {
//         return this.create(item);
//       }
//     })
//   }
  
  }
