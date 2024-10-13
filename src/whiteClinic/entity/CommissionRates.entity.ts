import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('CommissionRates')
export class CommissionRate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rate: number;
}
