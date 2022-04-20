import { Router } from 'express';
import { threadId } from 'worker_threads';
import { StudentFormController } from '../controller/studentForm.controller';



/**
 * / route
 *
 * @class Profile
 */
export class StudentFormRoute {
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
    let controller = new StudentFormController();
    
    this.router.route('/studentFormList').get(controller.studentList)
    this.router.route('/studentForm/findStudentRecord/:id').get(controller.find)
    this.router.route('/studentForm/create').post(controller.create);
   this.router.route('/studentForm/upload/:id').post(controller.pic)
   this.router.route('/studentForm/picture/:id').get(controller.pictureDetail)
    this.router.route('/studentForm/update/:id').put(controller.updateForm);
    this.router.route('/studentForm/delete/:id').delete(controller.deleteForm);
  }
}
