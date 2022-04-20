import { Router } from 'express';
import { AcademicSessionBaseRoute } from '../../acdemicSession/routes/base/academicSession.base.route';
import { AttachmentFile_2Route } from '../../attachmentFile_2/routes/attachmentFile_2.route';
import { Attachment_2Route } from '../../attachment_2/routes/attachment_2.routes';
import { CampusBaseRoute } from '../../campus/routes/base/campus.base.route';
import { CampusProgramBaseRoute } from '../../campusProgram/routes/base/campusProgram.base.route';
import { ConfigurationBaseRoute } from '../../configuration/routes/base/configuration.base.route';
import { CountryBaseRoute } from '../../country/routes/base/country.base.route';
import { ProgramBaseRoute } from '../../program/routes/base/program.base.route';
import { ProgramDetailBaseRoute } from '../../programDetail/routes/base/programDetail.base.route';
import { StudentAcademicRecordRoute } from '../../studentAcademicRecord/routes/studentAcademicRecord.base';
import { StudentFormBaseRoute } from '../../studentForm/routes/base/studentForm.base.route';

/**
 * / route
 *
 * @class BaseRoute
 */
export class BaseRoute {
  router: Router;

  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router) {
    this.router = router;
    this.initAll();
  }

  /**
   * init all routes
   */
  public initAll() {
   
    new CountryBaseRoute(this.router);
    new CampusBaseRoute(this.router);
    new CampusProgramBaseRoute(this.router);
    new ProgramBaseRoute(this.router);
    new ProgramDetailBaseRoute(this.router);
    new ConfigurationBaseRoute(this.router);
    new AcademicSessionBaseRoute(this.router);
    new StudentFormBaseRoute(this.router);
    new StudentAcademicRecordRoute(this.router);
    new Attachment_2Route(this.router);
    new AttachmentFile_2Route(this.router);
  
}
}
