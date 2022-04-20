import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'Country' })
export class country extends Model<country> {
  @Column code: string;
  @Column abbreviation: string;
  @Column createdBy: number;
  @Column updatedBy: number;
  @Column deleted:boolean;

}
