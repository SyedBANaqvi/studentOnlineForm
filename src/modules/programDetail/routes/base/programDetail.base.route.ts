import { Router } from 'express';
import { ProgramDetailRoute } from '../programDetails.route';


/**
 * / route
 *
 * @class BaseRoute
 */
export class ProgramDetailBaseRoute {
  router: Router;

  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router) {
    this.router = router;
    this.initAll();
  }

  /**
   * init all routes
   */
  public initAll() {
    new ProgramDetailRoute(this.router);
  }
}


