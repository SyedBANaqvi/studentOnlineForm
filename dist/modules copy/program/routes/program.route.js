"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramRoute = void 0;
const program_controller_1 = require("../controllers/program.controller");
/**
 * / route
 *
 * @class Profile
 */
class ProgramRoute {
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
        let controller = new program_controller_1.ProgramControllers();
        console.log("it is called");
        this.router.route('/program/list').get(controller.list);
        this.router.route('/hello').get(controller.hello);
    }
}
exports.ProgramRoute = ProgramRoute;
