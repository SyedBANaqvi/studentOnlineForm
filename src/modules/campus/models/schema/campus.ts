import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { CampusProgram } from '../../../campusProgram/models/schema/campusProgram';
import { Program } from '../../../program/models/schema/program';

@Table({ timestamps: true, tableName: 'Campus' })
export class campus extends Model<campus> {
  @Column campusId: string;
  @Column CRApplicationId: string;
  @Column codeNumber: string;
  @Column campusName: string;
  @Column email:string;
  @Column mobileNumber: string;
  @Column address: string;
  @Column landLineNumber:string;
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column status:string;
  @Column academicMonth:string;
  @Column academicYear:string;
  @Column deleted:boolean;
  @Column cityId:string;
  @Column campusTitle:string;
  @Column challanTemplate:string;
  @Column blockPortals:string;


//   @BelongsTo(() => CampusProgram, {
//     foreignKey: 'id',
//     targetKey:'campusId'
    
//   })
//   campusProgram: CampusProgram;

    @HasMany(() => CampusProgram, {
            foreignKey: 'campusId',
            sourceKey: 'id'
    })
    campusProgram: CampusProgram[]


   
}
