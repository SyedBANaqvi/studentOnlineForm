"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment_2BaseRoute = void 0;
// import { CountryRoute } from '../..';
const attachment_2_routes_1 = require("../attachment_2.routes");
/**
 * / route
 *
 * @class BaseRoute
 */
class Attachment_2BaseRoute {
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
        new attachment_2_routes_1.Attachment_2Route(this.router);
    }
}
exports.Attachment_2BaseRoute = Attachment_2BaseRoute;
