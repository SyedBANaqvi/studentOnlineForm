"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusRoute = void 0;
const campus_controller_1 = require("../controllers/campus.controller");
/**
 * / route
 *
 * @class Profile
 */
class CampusRoute {
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
        let controller = new campus_controller_1.CampusControllers();
        this.router.route('/campusList').get(controller.list);
    }
}
exports.CampusRoute = CampusRoute;
