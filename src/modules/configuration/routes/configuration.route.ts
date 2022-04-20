import { Router } from 'express';
import { threadId } from 'worker_threads';
import { ConfigurationController } from '../controller/configuration.controller';
// import configuration

/**
 * / route
 *
 * @class Profile
 */
export class ConfigurationRoute {
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
    let controller = new ConfigurationController();
    
    this.router.route('/configuration/list').get(controller.list)
     this.router.route('/hello').get(controller.hello)
     this.router.route('/cityList').get(controller.parentKeyWithDetail)
     this.router.route('/parentKeyToFindTehsil').get(controller.parentKeyToFindTehsil)
     this.router.route('/provinceList').get(controller.parentKeyToFindProvince)
     this.router.route('/admissionTypesList').get(controller.keyToFindAdmissionTypes)
     
  }
}
