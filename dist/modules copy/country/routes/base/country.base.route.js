"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryBaseRoute = void 0;
// import { CountryRoute } from '../..';
const country_route_1 = require("../country.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class CountryBaseRoute {
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
        new country_route_1.CountryRoute(this.router);
    }
}
exports.CountryBaseRoute = CountryBaseRoute;
