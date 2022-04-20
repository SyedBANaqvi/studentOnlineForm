import { Router } from 'express';
import { threadId } from 'worker_threads';
import { StudentAcademicRecordController } from '../controller/studentAcademicRecord.controller';



/**
 * / route
 *
 * @class Profile
 */
export class StudentAcademicRecordRoute {
  router: Router;

  /**
   * Constructor
   *
   * @class CountryRoute
   * @constructor
   */
  constructor(router: Router) {
    this.router = router;
    this.create();
  }

  /**
   * Create the routes.
   *
   * @class ProfileRoute
   * @method create
   *
   */
  public create() {
    let controller = new StudentAcademicRecordController();
    
    this.router.route('/studentAcademicRecord/create').post(controller.create)
    // this.router.route('/studentForm/create').post(controller.create);
   

  }
}
