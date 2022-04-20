"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentFile_2Route = void 0;
const attachmentFile_2_controller_1 = require("../controller/attachmentFile_2.controller");
/**
 * / route
 *
 * @class Profile
 */
class AttachmentFile_2Route {
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
        let controller = new attachmentFile_2_controller_1.AttachmentFile_2Controllers();
        this.router.route('/attachmentFile_2/list').get(controller.list);
        this.router.route('/attachmentFile_2/create').get(controller.createAttachmentFile);
        this.router.route('/hello').get(controller.hello);
    }
}
exports.AttachmentFile_2Route = AttachmentFile_2Route;
