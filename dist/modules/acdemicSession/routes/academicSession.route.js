"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSessionRoute = void 0;
const academicSession_controller_1 = require("../controller/academicSession.controller");
/**
 * / route
 *
 * @class Profile
 */
class AcademicSessionRoute {
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
        let controller = new academicSession_controller_1.AcademicSessionControllers();
        this.router.route('/academicSessionList').get(controller.list);
        this.router.route('/hello').get(controller.hello);
    }
}
exports.AcademicSessionRoute = AcademicSessionRoute;
