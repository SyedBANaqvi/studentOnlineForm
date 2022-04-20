"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusProgramRoute = void 0;
const campusProgram_controller_1 = require("../controllers/campusProgram.controller");
/**
 * / route
 *
 * @class Profile
 */
class CampusProgramRoute {
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
        let controller = new campusProgram_controller_1.CampusProgramController();
        console.log("it is called");
        this.router.route('/campusProgram/list').get(controller.list);
        this.router.route('/hello').get(controller.hello);
    }
}
exports.CampusProgramRoute = CampusProgramRoute;
