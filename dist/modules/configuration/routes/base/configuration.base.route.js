"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationBaseRoute = void 0;
const configuration_route_1 = require("../configuration.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class ConfigurationBaseRoute {
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
        new configuration_route_1.ConfigurationRoute(this.router);
    }
}
exports.ConfigurationBaseRoute = ConfigurationBaseRoute;
