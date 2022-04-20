import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { CampusRoute } from '../campus.route';


/**
 * / route
 *
 * @class BaseRoute
 */
export class CampusBaseRoute {
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
    new CampusRoute(this.router);
  }
}
