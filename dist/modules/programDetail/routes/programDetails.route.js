"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramDetailRoute = void 0;
const programDetail_controller_1 = require("../controllers/programDetail.controller");
/**
 * / route
 *
 * @class Profile
 */
class ProgramDetailRoute {
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
        let controller = new programDetail_controller_1.ProgramDetailControllers();
        this.router.route('/programDetail/list').get(controller.list);
        this.router.route('/hello').get(controller.hello);
    }
}
exports.ProgramDetailRoute = ProgramDetailRoute;
