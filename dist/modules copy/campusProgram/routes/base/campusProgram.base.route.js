"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusProgramBaseRoute = void 0;
const campusProgram_route_1 = require("../campusProgram.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class CampusProgramBaseRoute {
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
        new campusProgram_route_1.CampusProgramRoute(this.router);
    }
}
exports.CampusProgramBaseRoute = CampusProgramBaseRoute;
