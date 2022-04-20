import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'StudentAcademicRecord' })
export class StudentAcademicRecord extends Model<StudentAcademicRecord> {
  @Column rollNo: string;
  @Column obtainedMarks: string;
  @Column percentage: number;
  @Column board: string;
  @Column studentId: number;
  @Column createdAt: Date;
  @Column updatedAt: Date;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column deleted:boolean;

}
