"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentFile_2BaseRoute = void 0;
// import { CountryRoute } from '../..';
const attachmentFile_2_route_1 = require("../attachmentFile_2.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class AttachmentFile_2BaseRoute {
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
        new attachmentFile_2_route_1.AttachmentFile_2Route(this.router);
    }
}
exports.AttachmentFile_2BaseRoute = AttachmentFile_2BaseRoute;
