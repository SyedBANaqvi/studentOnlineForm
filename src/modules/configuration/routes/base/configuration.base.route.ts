import {  Router } from 'express';
import { ConfigurationRoute } from '../configuration.route';

/**
 * / route
 *
 * @class BaseRoute
 */
export class ConfigurationBaseRoute {
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
    new ConfigurationRoute(this.router);
  }
}
