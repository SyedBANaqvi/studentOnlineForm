import { BaseModel } from '../../base/models/base.model';
import { ErrorHandler } from '../../base/conf/error-handler';
import { Op } from 'sequelize';
import { AttachmentFile_2 } from './schema/attachmentFile_2';

export class AttachmentFile_2Model extends BaseModel {
  constructor(req: any) {
    super(req, AttachmentFile_2);
  }
  list() {
    return this.findAll([''])
   
  }
//   public createWithDetail() {
//     return this.findAllByConditions(['id','session','periodic'], { : item.campusId, campusName: item.campusName })
  
//   }
public createWithAttachmentFile_2Detail(item) {
  return new  AttachmentFile_2Model(this.req).findByCondition(null, { originalName: item.originalName, name:item.name, 
    path:item.path, size:item.size, type:item.type }).then(res => {
    
    
      if (res) {
      
      
      return ErrorHandler.duplicateEntry;

    } else {
      return new AttachmentFile_2Model(this.req).create(item);
    }
  })
}

}
