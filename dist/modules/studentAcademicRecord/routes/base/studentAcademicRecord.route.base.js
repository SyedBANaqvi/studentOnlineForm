"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademicRecordBaseRoute = void 0;
const studentAcademicRecord_base_1 = require("../../routes/studentAcademicRecord.base");
// import { CountryRoute } from '../..';
/**
 * / route
 *
 * @class BaseRoute
 */
class StudentAcademicRecordBaseRoute {
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
        new studentAcademicRecord_base_1.StudentAcademicRecordRoute(this.router);
    }
}
exports.StudentAcademicRecordBaseRoute = StudentAcademicRecordBaseRoute;
