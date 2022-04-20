import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Attachment_2 } from '../../../attachment_2/models/schema/attachment_2';
import { StudentAcademicRecord } from '../../../studentAcademicRecord/models/schema/studentAcademicRecord';

@Table({ timestamps: true, tableName: 'StudentForm' })
export class StudentForm extends Model<StudentForm> {
  @Column session: string;
  @Column month: string;
  @Column year: string;
  @Column admissionDate: Date;
  @Column name:string;
  @Column dob: string;
  @Column gender: string;
  @Column markOfIdentification: string;
  @Column countryCode: string;
  @Column mobileNumber:string;
  @Column email: string;
  @Column cnicType: string;
  @Column cnicId: string;
  @Column religion: string;
  @Column nationality:string;
  @Column emergencyContactCode: string;
  @Column emergencyContactNumber: string;
  @Column postalCity: string;
  @Column postalAddress: string;
  @Column permanentCity:string;
  @Column permanentAddress: string;
  @Column domicileCity: string;
  @Column domicileProvince: string;
  @Column domicileTehsil:string;
  @Column admissionType:string;
  @Column guardianType: string;
  @Column guardianName: string;
  @Column guardianCnic: string;
  @Column guardianCountry:string;
  @Column guardianMobileNumber:string;
  @Column campusId:number;
  @Column programDetailId:number;
  @Column createdAt: Date;
  @Column updatedAt: Date;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column deleted: boolean;
  




@HasMany(() => StudentAcademicRecord, {
    foreignKey: 'studentId',
    sourceKey: 'id'
})
studentAcademicRecord: StudentAcademicRecord[]

  

@HasMany(()=> Attachment_2,{
  sourceKey:'id',
  foreignKey:'parentId',
  })
  attachment_2:Attachment_2
  

  }
  


//['id','session','month','year','admissionDate','name','dob','gender','markOfIdentification','countryCode',
//     'mobileNumber','email','cnicType','cnicId','religion','nationality','emergencyContactCode','emergencyContactNumber','postalCity','postalAddress',
//     'permanentCity','permanentAddress','domicileCity','domicileProvince','domicileTehsil','admissionType','guardianType','guardianName',
//     'guardianCnic','guardianCountry','guardianMobileNumber']