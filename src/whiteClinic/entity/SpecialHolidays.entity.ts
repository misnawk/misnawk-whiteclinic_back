import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Engineer } from './Engineer.entity';

@Entity()
export class SpecialHoliday {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  holiday: Date;

  @ManyToOne(() => Engineer)
  engineer: Engineer;
}
