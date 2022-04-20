"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFormRoute = void 0;
const studentForm_controller_1 = require("../controller/studentForm.controller");
/**
 * / route
 *
 * @class Profile
 */
class StudentFormRoute {
    /**
     * Constructor
     *
     * @class CountryRoute
     * @constructor
     */
    constructor(router) {
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
    create() {
        let controller = new studentForm_controller_1.StudentFormController();
        this.router.route('/studentFormList').get(controller.studentList);
        this.router.route('/studentForm/findStudentRecord/:id').get(controller.find);
        this.router.route('/studentForm/create').post(controller.create);
        this.router.route('/studentForm/upload/:id').post(controller.pic);
        this.router.route('/studentForm/picture/:id').get(controller.pictureDetail);
        this.router.route('/studentForm/update/:id').put(controller.updateForm);
        this.router.route('/studentForm/delete/:id').delete(controller.deleteForm);
    }
}
exports.StudentFormRoute = StudentFormRoute;
