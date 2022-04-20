import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { ProgramRoute } from '../program.route';


/**
 * / route
 *
 * @class BaseRoute
 */
export class ProgramBaseRoute {
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
    new ProgramRoute(this.router);
  }
}
