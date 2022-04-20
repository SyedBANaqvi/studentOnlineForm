import { BelongsTo, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { AttachmentFile_2 } from '../../../attachmentFile_2/models/schema/attachmentFile_2';

@Table({ timestamps: true, tableName: 'Attachment_2' })
export class Attachment_2 extends Model<Attachment_2> {
  
  @Column parent: string;
  @Column parentId:number;
  @Column deleted:boolean;
  @Column createdAt: Date;
  @Column updatedAt: Date;
  @Column createdBy: number;
  @Column updatedBy: number;


  @HasMany(() => AttachmentFile_2, {
    foreignKey: 'attachment_2_Id',
    sourceKey: 'id'
})
attachmentFile_2:  AttachmentFile_2


}
