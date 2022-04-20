import { Router } from 'express';
import { threadId } from 'worker_threads';

import { Attachment_2Controllers } from '../controller/attachment_2.controller';
/**
 * / route
 *
 * @class Profile
 */
export class Attachment_2Route {
  router: Router;

  /**
   * Constructor
   *
   * @class CountryRoute
   * @constructor
   */
  constructor(router: Router) {
    this.router = router;
    this.create();
  }

  /**
   * Create the routes.
   *
   * @class ProfileRoute
   * @method create
   *
   */
  public create() {
    let controller = new Attachment_2Controllers();
    
    // this.router.route('studentForm/attachment_2/list').get(controller.list)
    this.router.route('studentForm/attachment_2/create').post(controller.createAttachment)
    

  }
}
