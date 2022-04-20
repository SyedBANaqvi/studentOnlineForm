import { Router } from 'express';
import { threadId } from 'worker_threads';

import { CampusControllers } from '../controllers/campus.controller';

/**
 * / route
 *
 * @class Profile
 */
export class CampusRoute {
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
    let controller = new CampusControllers();
    
    this.router.route('/campusList').get(controller.list)

  }
}
