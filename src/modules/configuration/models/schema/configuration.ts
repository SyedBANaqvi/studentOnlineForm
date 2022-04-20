import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';


@Table({ timestamps: true, tableName: 'Configuration' })
export class Configuration extends Model<Configuration> {
  @Column key: string;
  @Column value: string;
  @Column createdAt: string;
  @Column updatedAy: string;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column parentKey: string;
  @Column parentKeyId: number;
  @Column isSingle: boolean;
  @Column label: string;
  @Column deleted:boolean;
//   @BelongsTo(() => CampusProgram, {
//     foreignKey: 'id',
//     targetKey:'campusId'
    
//   })
//   campusProgram: CampusProgram;
}