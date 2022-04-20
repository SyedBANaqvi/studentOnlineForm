import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'ProgramDetail' })
export class ProgramDetail extends Model<ProgramDetail> {
  @Column name: string;
  @Column programId: string;
 
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
 
  @Column abbreviation:string;
  @Column deleted:boolean;
  @Column graded:boolean;
  @Column transferMaxCreditHours:boolean;
  @Column timeTableType:string;
  @Column courseMaxCreditHours:string;
  @Column safeAbsentCount:boolean;
  @Column alarmingAbsentCount:number;
  @Column criticalAbsentCount:string;
  @Column markingSchemeId:boolean;
  @Column orderNumber:boolean;
  @Column attendanceType:boolean;
  @Column programDuration:boolean;





}
