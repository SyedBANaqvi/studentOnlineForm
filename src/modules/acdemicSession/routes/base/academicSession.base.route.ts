import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { AcademicSessionRoute } from '../academicSession.route';


/**
 * / route
 *
 * @class BaseRoute
 */
export class AcademicSessionBaseRoute {
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
    new AcademicSessionRoute(this.router);
  }
}
