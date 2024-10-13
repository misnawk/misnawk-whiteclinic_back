import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from './whiteClinic/entity/Engineer.entity';
import { EngineerModule } from './whiteClinic/module/Engineer.module';
import { EngineerSalaryService } from './whiteClinic/service/Engineer-salary.service';
import { EngineerSalary } from './whiteClinic/entity/EngineerSalary.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-rough-king-a426uv30-pooler.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'default',
      password: 'xMgC19jsebJo',
      database: 'verceldb',
      entities: [Engineer, EngineerSalary],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    EngineerModule,
  ],
})
export class AppModule {}
