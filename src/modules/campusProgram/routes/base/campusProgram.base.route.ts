import {  Router } from 'express';
import { CampusProgramRoute } from '../campusProgram.route';

/**
 * / route
 *
 * @class BaseRoute
 */
export class CampusProgramBaseRoute {
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
    new CampusProgramRoute(this.router);
  }
}
