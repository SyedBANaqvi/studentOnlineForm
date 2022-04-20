import { Router } from 'express';
import { threadId } from 'worker_threads';

import { AttachmentFile_2Controllers } from '../controller/attachmentFile_2.controller';
/**
 * / route
 *
 * @class Profile
 */
export class AttachmentFile_2Route {
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
    let controller = new AttachmentFile_2Controllers();
    
    this.router.route('/attachmentFile_2/list').get(controller.list)
    this.router.route('/attachmentFile_2/create').get(controller.createAttachmentFile)
     this.router.route('/hello').get(controller.hello)

  }
}
