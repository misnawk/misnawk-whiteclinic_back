import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('WeekDays')
export class WeekDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dayName: string;
}
