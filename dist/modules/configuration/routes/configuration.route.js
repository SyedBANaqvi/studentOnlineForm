"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRoute = void 0;
const configuration_controller_1 = require("../controller/configuration.controller");
// import configuration
/**
 * / route
 *
 * @class Profile
 */
class ConfigurationRoute {
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
        let controller = new configuration_controller_1.ConfigurationController();
        this.router.route('/configuration/list').get(controller.list);
        this.router.route('/hello').get(controller.hello);
        this.router.route('/cityList').get(controller.parentKeyWithDetail);
        this.router.route('/parentKeyToFindTehsil').get(controller.parentKeyToFindTehsil);
        this.router.route('/provinceList').get(controller.parentKeyToFindProvince);
        this.router.route('/admissionTypesList').get(controller.keyToFindAdmissionTypes);
    }
}
exports.ConfigurationRoute = ConfigurationRoute;
