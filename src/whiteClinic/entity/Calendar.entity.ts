import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Calendar')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weekStartDate: Date;

  @Column()
  weekEndDate: Date;
}
