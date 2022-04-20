import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Program } from '../../../program/models/schema/program';

@Table({ timestamps: true, tableName: 'CampusProgram' })
export class CampusProgram extends Model<CampusProgram> {
  @Column campusId: string;
  @Column programId: string;
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column deleted:boolean;
 
//   @BelongsTo(() => CampusProgram, {
//     foreignKey: 'id',
//     targetKey:'campusId'
    
//   })
//   campusProgram: CampusProgram;
@BelongsTo(()=> Program,{
foreignKey:'programId',
targetKey:'id'
})
program:Program

}