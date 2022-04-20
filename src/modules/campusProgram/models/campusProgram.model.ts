import { BaseModel } from '../../base/models/base.model';
import { CampusProgramController } from '../controllers/campusProgram.controller';
import { ErrorHandler } from '../../base/conf/error-handler';
import { CampusProgram } from './schema/campusProgram';

export class CampusProgramModel extends BaseModel {
  constructor(req: any) {
    super(req, CampusProgram);
  }
  list() {
    return this.findAll(['id','campusId','programId'])
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
