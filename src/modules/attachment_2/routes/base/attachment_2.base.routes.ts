import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { Attachment_2Route } from '../attachment_2.routes';


/**
 * / route
 *
 * @class BaseRoute
 */
export class Attachment_2BaseRoute {
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
    new Attachment_2Route(this.router);
  }
}
