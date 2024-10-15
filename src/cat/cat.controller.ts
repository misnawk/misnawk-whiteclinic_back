import { Bind, Body, Controller, Post } from '@nestjs/common';
import { Role } from 'src/users/role.enum';
import { Roles } from 'src/users/roles.decorator';

@Controller('cat')
export class CatController {
  @Post()
  @Roles(Role.Admin)
  @Bind(Body())
  create(createCatDto) {
    this.create(createCatDto);
  }
}
