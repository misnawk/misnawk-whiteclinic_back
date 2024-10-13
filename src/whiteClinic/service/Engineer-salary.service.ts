import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EngineerSalary } from '../entity/EngineerSalary.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class EngineerSalaryService {
  constructor(
    //접근하려고하는 entity를 적어준다.
    @InjectRepository(EngineerSalary)
    private EngineerSalaryRepository: Repository<EngineerSalary>,
  ) {}

  async getEngineerSalary(id: number): Promise<any> {
    const query = `
    SELECT * FROM salary
    WHERE id = ?;
  `;

    return await this.EngineerSalaryRepository.query(query, [id]);
  }
}
