import { Router } from 'express';
import { threadId } from 'worker_threads';
import { CampusProgramController } from '../controllers/campusProgram.controller';

import { CampusProgram } from '../models/schema/campusProgram';

/**
 * / route
 *
 * @class Profile
 */
export class CampusProgramRoute {
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
    let controller = new CampusProgramController();
    
    this.router.route('/campusProgram/list').get(controller.list)
     this.router.route('/hello').get(controller.hello)

  }
}
