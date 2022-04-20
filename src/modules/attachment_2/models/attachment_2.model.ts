import { BaseModel } from '../../base/models/base.model';
import { ErrorHandler } from '../../base/conf/error-handler';
import { Op } from 'sequelize';
import { Attachment_2 } from './schema/attachment_2';

export class Attachment_2Model extends BaseModel {
  constructor(req: any) {
    super(req, Attachment_2);
  }
  list() {
    return this.findAll([''])
   
  }

  public createWithAttachment_2Detail(item) {
    return new  Attachment_2Model(this.req).findByCondition(null, { parent: item.parent, parentId:item.parentId }).then(res => {
      if (res) {
        
        
        return ErrorHandler.duplicateEntry;
  
      } else {
        return new Attachment_2Model(this.req).create(item);
      }
    })
  }

}
