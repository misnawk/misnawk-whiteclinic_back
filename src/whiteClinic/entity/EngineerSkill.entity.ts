import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Engineer } from './Engineer.entity';
import { Skill } from './Skills.entity';

@Entity('Engineer_skill')
export class EngineerSkill {
  @PrimaryColumn()
  engineerId: number;

  @PrimaryColumn()
  skillId: number;

  @ManyToOne(() => Engineer, (engineer) => engineer.id)
  engineer: Engineer;

  @ManyToOne(() => Skill, (skill) => skill.id)
  skill: Skill;
}
