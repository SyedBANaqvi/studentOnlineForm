import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { AcademicSession } from "../../acdemicSession/models/schema/academicSession";
import { AttachmentFile_2 } from "../../attachmentFile_2/models/schema/attachmentFile_2";
import { Attachment_2 } from "../../attachment_2/models/schema/attachment_2";
import { campus } from "../../campus/models/schema/campus";
import { CampusProgram } from "../../campusProgram/models/schema/campusProgram";
import { Configuration } from "../../configuration/models/schema/configuration";
import { country } from "../../country/models/schema/country";
import { Program } from "../../program/models/schema/program";
import { ProgramDetail } from "../../programDetail/models/schema/programDetail";
import { StudentAcademicRecord } from "../../studentAcademicRecord/models/schema/studentAcademicRecord";
import { StudentForm } from "../../studentForm/models/schema/studentForm";

export class Connection {
    sequelize:Sequelize;

    constructor(){}

    public async createConnection() 
    {

        try
        {
            let SEQ_CONNECTION_OPTIONS:SequelizeOptions = {
                dialect: "mssql",
                host: "localhost",
                logQueryParameters:true,
                dialectOptions:{
                    options:{
                        requestTimeout:300000 
                    }
                },
                // logging: false,
                pool:{
                    max: 5, // Maximum number of connection in pool
                    min: 0, // Minimum number of connection in pool
                    acquire: 60000, // The maximum time, in millisecond, that a connection can be idle before being released.
                    idle: 20000, // The maximum time, in millisecond, that pool will try to get connection before throwing error.
                    
                }
            }
            this.sequelize = new Sequelize("idrak_bns","sa","syedbilal@12345",SEQ_CONNECTION_OPTIONS);
            this.sequelize.authenticate()
            .then(()=>{
                console.log("Connect has been established successfully");
                
                
            })
            .catch(err=>{
                console.log("Unable to connect to the database:", err);
                
            });
    
            this.sequelize.addModels([
                country,
                campus,
                CampusProgram,
                Program,
                ProgramDetail,
                Configuration,
                AcademicSession,
                StudentForm,
                StudentAcademicRecord,
                Attachment_2,
                AttachmentFile_2
                ])
    
            return this.sequelize;
        }
        catch(error)
        {
            console.log("-----------------------------------------------------------------------------")
            console.log("some error", error);
            console.log("-----------------------------------------------------------------------------")
            
        }
    }
}