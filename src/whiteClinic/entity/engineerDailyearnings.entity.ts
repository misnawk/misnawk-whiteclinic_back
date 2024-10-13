import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Engineer } from './Engineer.entity';

@Entity('engineer_dailyearnings')
export class engineerDailyearnings {
  @PrimaryGeneratedColumn({ name: 'engineer_id' })
  engineerId: number;

  @Column()
  date: Date;

  @Column({ name: 'daily_amount' })
  dailyAmount: number;

  @ManyToMany(() => Engineer)
  engineer: Engineer;
}
