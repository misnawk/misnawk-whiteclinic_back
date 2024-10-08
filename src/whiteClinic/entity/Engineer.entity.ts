import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Engineer {
  @PrimaryGeneratedColumn()
  engineerId: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  address:string;

  @Column()
  AvailableItems: string;

  @Column()
  Issue: string;

  @Column()
  WorkDays: string;

  @Column()
  ClosedDays: string;

  @Column()
  Salary: number;
}
