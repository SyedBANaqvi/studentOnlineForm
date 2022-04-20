"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoute = void 0;
const campus_base_route_1 = require("../../campus/routes/base/campus.base.route");
const campusProgram_base_route_1 = require("../../campusProgram/routes/base/campusProgram.base.route");
const configuration_base_route_1 = require("../../configuration/routes/base/configuration.base.route");
const country_base_route_1 = require("../../country/routes/base/country.base.route");
const program_base_route_1 = require("../../program/routes/base/program.base.route");
const programDetail_base_route_1 = require("../../programDetail/routes/base/programDetail.base.route");
/**
 * / route
 *
 * @class BaseRoute
 */
class BaseRoute {
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
        new country_base_route_1.CountryBaseRoute(this.router);
        new campus_base_route_1.CampusBaseRoute(this.router);
        new campusProgram_base_route_1.CampusProgramBaseRoute(this.router);
        new program_base_route_1.ProgramBaseRoute(this.router);
        new programDetail_base_route_1.ProgramDetailBaseRoute(this.router);
        new configuration_base_route_1.ConfigurationBaseRoute(this.router);
    }
}
exports.BaseRoute = BaseRoute;
