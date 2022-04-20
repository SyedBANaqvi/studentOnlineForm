import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'AttachmentFile_2' })
export class AttachmentFile_2 extends Model<AttachmentFile_2> {
  
  @Column attachment_2_Id: number;
  @Column originalName:string;
  @Column name: string;
  @Column path: string;
  @Column size: number;
  @Column type:string;
  @Column deleted:boolean;
  @Column createdAt: Date;
  @Column updatedAt: Date;
  @Column createdBy: number;
  @Column updatedBy: number;
 

 

 
}
