"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramBaseRoute = void 0;
// import { CountryRoute } from '../..';
const program_route_1 = require("../program.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class ProgramBaseRoute {
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
        new program_route_1.ProgramRoute(this.router);
    }
}
exports.ProgramBaseRoute = ProgramBaseRoute;
