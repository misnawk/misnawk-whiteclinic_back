import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from '../entity/Engineer.entity';
import { EngineerService } from '../service/Engineer.service';
import { EngineerController } from '../controller/Engineer.Controller';
import { EngineerSalaryService } from '../service/Engineer-salary.service';
import { EngineerSalary } from '../entity/EngineerSalary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Engineer, EngineerSalary])], //엔티티 주입
  providers: [EngineerService, EngineerSalaryService], // 서비스 주입
  controllers: [EngineerController], // 컨트롤러 주입
})
export class EngineerModule {}
