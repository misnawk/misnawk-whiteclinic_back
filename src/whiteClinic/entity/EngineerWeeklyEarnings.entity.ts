import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Engineer } from './Engineer.entity';
import { Calendar } from './Calendar.entity';
import { CommissionRate } from './CommissionRates.entity';

@Entity('Engineer_WeeklyEarnings')
export class EngineerWeeklyEarnings {
  @PrimaryColumn()
  engineerId: number;

  @PrimaryColumn()
  calendarId: number;

  @Column()
  totalWeeklyAmount: number;

  @Column()
  allowanceAmount: number;

  @ManyToOne(() => Engineer)
  engineer: Engineer;

  @ManyToOne(() => Calendar)
  calendar: Calendar;

  @ManyToOne(() => CommissionRate)
  commissionRate: CommissionRate;

  @Column({ type: 'boolean' })
  isPaid: boolean;
}
