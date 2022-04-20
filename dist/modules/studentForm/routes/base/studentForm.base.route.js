"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFormBaseRoute = void 0;
const studentForm_route_1 = require("../studentForm.route");
// import { CountryRoute } from '../..';
/**
 * / route
 *
 * @class BaseRoute
 */
class StudentFormBaseRoute {
    /**
     * Constructor
     *
     * @class BaseRoute
     * @constructor
     */
    constructor(router) {
        this.router = router;
        this.initAll();
    }
    /**
     * init all routes
     */
    initAll() {
        new studentForm_route_1.StudentFormRoute(this.router);
    }
}
exports.StudentFormBaseRoute = StudentFormBaseRoute;
