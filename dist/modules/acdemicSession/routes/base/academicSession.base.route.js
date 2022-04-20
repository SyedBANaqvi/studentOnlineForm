"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSessionBaseRoute = void 0;
// import { CountryRoute } from '../..';
const academicSession_route_1 = require("../academicSession.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class AcademicSessionBaseRoute {
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
        new academicSession_route_1.AcademicSessionRoute(this.router);
    }
}
exports.AcademicSessionBaseRoute = AcademicSessionBaseRoute;
