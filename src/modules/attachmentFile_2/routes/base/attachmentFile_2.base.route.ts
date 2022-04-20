import { NextFunction, Request, Response, Router } from 'express';
// import { CountryRoute } from '../..';
import { AttachmentFile_2Route } from '../attachmentFile_2.route';


/**
 * / route
 *
 * @class BaseRoute
 */
export class AttachmentFile_2BaseRoute {
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
    new AttachmentFile_2Route(this.router);
  }
}
