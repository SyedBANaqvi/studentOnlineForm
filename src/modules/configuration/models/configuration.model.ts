import { BaseModel } from '../../base/models/base.model';
import { ConfigurationController } from '../controller/configuration.controller';
import { Configuration } from './schema/configuration';
import { ErrorHandler } from '../../base/conf/error-handler';

export class ConfigurationModel extends BaseModel {
  constructor(req: any) {
    super(req, Configuration);
  }
  list() {
    return this.findAll(['id','value','parentKey'])
  }
  public parentKeyWithDetail() {
    return this.findAllByConditions(['id','value','parentKey'], { parentKey:'city' })
  }
  public parentKeyToFindTehsil() {
    return this.findAllByConditions(['id','value','parentKey'], { parentKey:'tehsil' })
  }

  public parentKeyToFindProvince() {
    return this.findAllByConditions(['id','value','parentKey'], { parentKey:'province' })
  }

  public keyToFindAdmissionTypes() {
    return this.findAllByConditions(['id','value','parentKey'], { key:'admission_types' })
  }
  
  }
