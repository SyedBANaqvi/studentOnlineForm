import { NextFunction, Request, Response, Router } from 'express';
import { StudentAcademicRecordRoute } from '../../routes/studentAcademicRecord.base';
// import { CountryRoute } from '../..';

/**
 * / route
 *
 * @class BaseRoute
 */
export class StudentAcademicRecordBaseRoute {
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
    new StudentAcademicRecordRoute(this.router);
  }
}
