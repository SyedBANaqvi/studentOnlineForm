import { Router } from 'express';
import { threadId } from 'worker_threads';

import { CountryController } from '../controllers/country.controller';

/**
 * / route
 *
 * @class Profile
 */
export class CountryRoute {
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
    let controller = new CountryController();
    
    this.router.route('/countryList').get(controller.list)
    this.router.route('/country/list/create').post(controller.create);
    this.router.route('/hello').get(controller.hello)
    this.router.route('/country/list/update/:id').put(controller.update);

    this.router.route('/country/list/delete/:id').get(controller.deleteAllDetail);
    this.router.route('/country/list/find/:id').get(controller.find);

  }
}
