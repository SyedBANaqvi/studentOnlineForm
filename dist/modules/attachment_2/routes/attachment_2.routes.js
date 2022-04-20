"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment_2Route = void 0;
const attachment_2_controller_1 = require("../controller/attachment_2.controller");
/**
 * / route
 *
 * @class Profile
 */
class Attachment_2Route {
    /**
     * Constructor
     *
     * @class CountryRoute
     * @constructor
     */
    constructor(router) {
        this.router = router;
        this.create();
    }
    /**
     * Create the routes.
     *
     * @class ProfileRoute
     * @method create
     *
     */
    create() {
        let controller = new attachment_2_controller_1.Attachment_2Controllers();
        // this.router.route('studentForm/attachment_2/list').get(controller.list)
        this.router.route('studentForm/attachment_2/create').post(controller.createAttachment);
    }
}
exports.Attachment_2Route = Attachment_2Route;
