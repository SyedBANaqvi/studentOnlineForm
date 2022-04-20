"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramDetailBaseRoute = void 0;
const programDetails_route_1 = require("../programDetails.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class ProgramDetailBaseRoute {
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
        new programDetails_route_1.ProgramDetailRoute(this.router);
    }
}
exports.ProgramDetailBaseRoute = ProgramDetailBaseRoute;
