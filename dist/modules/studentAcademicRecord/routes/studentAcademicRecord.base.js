"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademicRecordRoute = void 0;
const studentAcademicRecord_controller_1 = require("../controller/studentAcademicRecord.controller");
/**
 * / route
 *
 * @class Profile
 */
class StudentAcademicRecordRoute {
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
        let controller = new studentAcademicRecord_controller_1.StudentAcademicRecordController();
        this.router.route('/studentAcademicRecord/create').post(controller.create);
        // this.router.route('/studentForm/create').post(controller.create);
    }
}
exports.StudentAcademicRecordRoute = StudentAcademicRecordRoute;
