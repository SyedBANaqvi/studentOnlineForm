import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ProgramDetail } from '../../../programDetail/models/schema/programDetail';

@Table({ timestamps: true, tableName: 'Program' })
export class Program extends Model<Program> {
  @Column name: string;
 
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column educationLevelId:number;
  @Column abbreviation:string;
  @Column deleted:boolean;
  @Column showCreditHours:boolean;
  @Column showCourseCode:boolean;
  @Column classCaption:string;
  @Column sessionType:string;
  @Column studentAutoWithdraw:boolean;
  @Column studentAutoWithdraw_AbsentCount:number;
  @Column arrearAdjustment:string;
  @Column showCourseOrder:boolean;
  @Column useMSForm:boolean;

@HasMany(()=> ProgramDetail,{
    foreignKey:'programId',
    sourceKey:'id'
})
programDetail:ProgramDetail[]




//   @BelongsTo(() => CampusProgram, {
//     foreignKey: 'id',
//     targetKey:'campusId'
    
//   })
//   campusProgram: CampusProgram;

    // @HasMany(() => Program, {
    //         foreignKey: 'campusId',
    //         sourceKey: 'id'
    // })
    // campusProgram: Program[]

}
