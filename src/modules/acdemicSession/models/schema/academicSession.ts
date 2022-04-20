import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'AcademicSession' })
export class AcademicSession extends Model<AcademicSession> {
  
  @Column session: string;
  @Column title:string;
  @Column status:boolean;
  @Column periodic:boolean;
  @Column startDate:Date;
  @Column endDate:Date;
  @Column sortOrder:number;
  @Column nextSession:string;
  @Column deleted:boolean;
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
 





}
