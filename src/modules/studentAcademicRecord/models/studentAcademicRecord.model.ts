import { BaseModel } from '../../base/models/base.model';
import { ErrorHandler } from '../../base/conf/error-handler';
import { StudentAcademicRecord} from './schema/studentAcademicRecord';

export class StudentAcademicRecordModel extends BaseModel {
  createWithFormDetail(body: any) {
      throw new Error('Method not implemented.');
  }
  constructor(req: any) {
    super(req, StudentAcademicRecord);
  }
  list() {
    return this.findAll(['id','rollNo','obtainedMarks','percentage','board'])
  }


  public createWithAcademicRecordDetail(item) {
    return new StudentAcademicRecordModel(this.req).findByCondition(null, { rollNo: item.rollNo, obtainedMarks: item.obtainedMarks,percentage: item.percentage,board: item.board }).then(res => {
      if (res) {
        return ErrorHandler.duplicateEntry;

      } else {
        return new StudentAcademicRecordModel(this.req).create(item);
      }
    })
  }
  
  }
  
