import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Engineer } from './Engineer.entity';
import { WeekDay } from './WeekDays.entity';

@Entity()
export class RegularHoliday {
  @PrimaryGeneratedColumn()
  engineerId: number;

  @PrimaryGeneratedColumn()
  weekdayId: number;

  @ManyToOne(() => Engineer)
  engineer: Engineer;

  @ManyToOne(() => WeekDay)
  weekday: WeekDay;
}
