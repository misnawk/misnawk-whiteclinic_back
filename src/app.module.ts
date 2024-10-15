import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from './whiteClinic/entity/Engineer.entity';
import { EngineerModule } from './whiteClinic/module/Engineer.module';
import { EngineerSalaryService } from './whiteClinic/service/Engineer-salary.service';
import { EngineerSalary } from './whiteClinic/entity/EngineerSalary.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

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

    AuthModule,

    UsersModule,

    CatModule,
  ],
  controllers: [CatController],
  providers: [
    CatService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
