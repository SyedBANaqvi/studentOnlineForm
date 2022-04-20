"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRoute = void 0;
const country_controller_1 = require("../controllers/country.controller");
/**
 * / route
 *
 * @class Profile
 */
class CountryRoute {
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
        let controller = new country_controller_1.CountryController();
        this.router.route('/countryList').get(controller.list);
        this.router.route('/country/list/create').post(controller.create);
        this.router.route('/hello').get(controller.hello);
        this.router.route('/country/list/update/:id').put(controller.update);
        this.router.route('/country/list/delete/:id').get(controller.deleteAllDetail);
        this.router.route('/country/list/find/:id').get(controller.find);
    }
}
exports.CountryRoute = CountryRoute;
