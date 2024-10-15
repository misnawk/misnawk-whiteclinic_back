import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { RolesGuard } from './roles.guard';

@Module({
  providers: [CatService, RolesGuard],
  controllers: [CatController],
})
export class CatModule {}
