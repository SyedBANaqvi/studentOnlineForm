import { Router } from 'express';

import { ProgramDetailControllers } from '../controllers/programDetail.controller';
/**
 * / route
 *
 * @class Profile
 */
export class ProgramDetailRoute {
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
    let controller = new ProgramDetailControllers();
    
    this.router.route('/programDetail/list').get(controller.list)
     this.router.route('/hello').get(controller.hello)

  }
}

