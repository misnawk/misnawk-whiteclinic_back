import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // http 상태코드를 명시적으로 설정할 때 사용
  @HttpCode(HttpStatus.OK)
  @Post('login')
  // @Body()를 사용해서 클라이언트의 데이터를 key와 value느낌으로 받을수있다.
  signIn(@Body() signInDto: Record<string, any>) {
    console.log('post 로그인 요청을 받음 ');

    //userName은 키가 되는것이고, password는 값이 된다.
    return this.authService.signIn(signInDto.userName, signInDto.password);
  }

  @UseGuards(AuthGuard)

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
