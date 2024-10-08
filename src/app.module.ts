import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from './whiteClinic/entity/Engineer.entity';
import { EngineerModule } from './whiteClinic/module/Engineer.module';
import { EngineerSalaryService } from './whiteClinic/service/Engineer-salary.service';
import { EngineerSalary } from './whiteClinic/entity/EngineerSalary.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'whiteclinic',
      entities: [Engineer, EngineerSalary],
      synchronize: false,
    }),
    EngineerModule,
  ],
})
export class AppModule {}
