import { BaseModel } from '../../base/models/base.model';
import { country } from './schema/country';
import { ErrorHandler } from '../../base/conf/error-handler';

export class CountryModel extends BaseModel {
  constructor(req: any) {
    super(req, country);
  }
  list() {
    return this.findAll(['id','code','abbreviation'])
  }
  public createWithDetail(item) {
    return this.findByCondition(['id','code','abbreviation'], { code: item.code, abbreviation: item.abbreviation }).then(res => {
      if (res) {
        return ErrorHandler.duplicateEntry;

      } else {
        return this.create(item);
      }
    })
  }
  public updateWithDetail(id, item) {
    return this.findByCondition(['id','code','abbreviation'], {  code: item.code, abbreviation: item.abbreviation }).then(res => {
      if (res) {
        return ErrorHandler.duplicateEntry;

      } else {
        return this.update(id, item);
      }
    })
    // return  this.updateByCondition()
  }
  public  deleteAllDetail(id) {
    return this.delete(id).then(res=>{
      return res
    })

    
    // return this.delete(id).then(() => {
    //   return new CountryModel(this.req).deleteAllByConditions({ id });
    // })

  }
  public findDetail(id) {
    return this.find(id,['id','code','abbreviation'] ).then(res => {
      if (res) {
        return res;

      } else {
        return ErrorHandler.notFound
      }
    })
  }
  }
