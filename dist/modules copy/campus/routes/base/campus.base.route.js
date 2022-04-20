"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusBaseRoute = void 0;
// import { CountryRoute } from '../..';
const campus_route_1 = require("../campus.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class CampusBaseRoute {
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
        new campus_route_1.CampusRoute(this.router);
    }
}
exports.CampusBaseRoute = CampusBaseRoute;
