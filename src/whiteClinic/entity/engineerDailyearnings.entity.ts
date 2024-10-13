import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engineer_dailyearnings')
export class engineerDailyearnings {
  @PrimaryGeneratedColumn({ name: 'engineer_id' })
  engineerId: number;

  @Column()
  date: Date;

  @Column({ name: 'daily_amount' })
  dailyAmount: number;
}
