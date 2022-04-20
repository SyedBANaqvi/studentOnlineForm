"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSessionBaseRoute = void 0;
// import { CountryRoute } from '../..';
// import { academicSession } from '../campus.route';
/**
 * / route
 *
 * @class BaseRoute
 */
class academicSessionBaseRoute {
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
        new academicSessionRoute(this.router);
    }
}
exports.academicSessionBaseRoute = academicSessionBaseRoute;
