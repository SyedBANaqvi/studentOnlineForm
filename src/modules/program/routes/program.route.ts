import { Router } from 'express';
import { threadId } from 'worker_threads';

import { ProgramControllers } from '../controllers/program.controller';
/**
 * / route
 *
 * @class Profile
 */
export class ProgramRoute {
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
    let controller = new ProgramControllers();
    this.router.route('/program/list').get(controller.list)
     this.router.route('/hello').get(controller.hello)

  }
}
