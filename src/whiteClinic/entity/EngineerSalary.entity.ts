import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Salary')
export class EngineerSalary {
  @PrimaryGeneratedColumn()
  id: number; // 엔지니어 ID

  @Column()
  salaryDay: string; // 수당 날짜

  @Column()
  daySalary: number; // 당일 수당
}
