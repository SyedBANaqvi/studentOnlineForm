import { Router } from 'express';
import { threadId } from 'worker_threads';

import { AcademicSessionControllers } from '../controller/academicSession.controller';
/**
 * / route
 *
 * @class Profile
 */
export class AcademicSessionRoute {
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
    let controller = new AcademicSessionControllers();
    
    this.router.route('/academicSessionList').get(controller.list)
     this.router.route('/hello').get(controller.hello)

  }
}
