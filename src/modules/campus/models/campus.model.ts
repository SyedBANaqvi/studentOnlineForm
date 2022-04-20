import { BaseModel } from '../../base/models/base.model';
import { campus } from './schema/campus';
import { ErrorHandler } from '../../base/conf/error-handler';
import { CampusProgram } from '../../campusProgram/models/schema/campusProgram';
import { Op } from 'sequelize';
import { Program } from '../../program/models/schema/program';
import { ProgramDetail } from '../../programDetail/models/schema/programDetail';
import { countBy } from 'lodash';

export class CampusModel extends BaseModel {
  constructor(req: any) {
    super(req, campus);
  }
  list() {
      let includeObj = [
          {model:CampusProgram, as: 'campusProgram',attributes:['campusId','programId'],where: BaseModel.cb(),required:true,
            include: [
                {model:Program,as:'program', attributes:['name','abbreviation'],where:BaseModel.cb(),required:true,
                include: [
                   {model:ProgramDetail,as:'programDetail',attributes:['id','name','programId','abbreviation'],where:BaseModel.cb(),required:true}
                        ]
            }
                
                ]
            }
         
      ]
    return this.findAll(['id','campusId','campusName'],null,includeObj)
    
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
