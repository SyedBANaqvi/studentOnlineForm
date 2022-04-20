import { NextFunction, Request, Response, Router } from 'express';
import { StudentFormRoute } from '../studentForm.route';
// import { CountryRoute } from '../..';

/**
 * / route
 *
 * @class BaseRoute
 */
export class StudentFormBaseRoute {
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
    new StudentFormRoute(this.router);
  }
}
