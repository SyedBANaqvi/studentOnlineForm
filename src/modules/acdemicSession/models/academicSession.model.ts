import { BaseModel } from '../../base/models/base.model';
import { AcademicSession } from './schema/academicSession';
import { ErrorHandler } from '../../base/conf/error-handler';
import { Op } from 'sequelize';

export class AcademicSessionModel extends BaseModel {
  constructor(req: any) {
    super(req, AcademicSession);
  }
  list() {
    return this.findAll(['session','title','periodic'])
   
  }
//   public createWithDetail() {
//     return this.findAllByConditions(['id','session','periodic'], { : item.campusId, campusName: item.campusName })
  
//   }
}
