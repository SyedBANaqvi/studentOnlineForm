import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { CountryRoute } from '../country.route';

/**
 * / route
 *
 * @class BaseRoute
 */
export class CountryBaseRoute {
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
    new CountryRoute(this.router);
  }
}
