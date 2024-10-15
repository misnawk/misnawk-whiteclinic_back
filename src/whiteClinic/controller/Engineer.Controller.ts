import { Controller, Get, Param, Post } from '@nestjs/common';
import { EngineerService } from '../service/Engineer.service';
import { Engineer } from '../entity/Engineer.entity';
import { EngineerSalary } from '../entity/EngineerSalary.entity';
import { EngineerSalaryService } from '../service/Engineer-salary.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('engineer')
export class EngineerController {
  constructor(
    private readonly engineerService: EngineerService,
    private readonly engineerSalaryService: EngineerSalaryService,
  ) {}

  @Get('info')
  // 요청을 받게되면 비동기로 getAllengineerName 함수 작동한다. 반환타입은 string[] 이다.
  async getAllEngineerName(): Promise<Engineer[]> {
    // name 객체 안에 getAllEngineerNames() 함수 리턴값을 넣어준다.
    const EngineerInfo = await this.engineerService.getAllEngineerInfo();
    console.log('컨트롤러:', EngineerInfo);
    return EngineerInfo;
  }

  @Get('salary/:id')
  @Roles(Role.Admin)
  async getEngineerSalary(@Param('id') id: number): Promise<EngineerSalary[]> {
    const EngineerSalaryData =
      await this.engineerSalaryService.getEngineerSalary(id);
    console.log(EngineerSalaryData);
    return EngineerSalaryData;
  }
}
