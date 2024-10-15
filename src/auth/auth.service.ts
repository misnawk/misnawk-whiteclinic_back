import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  //의존성을 주입해주었다.
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  //signIn 함수는 매개변수로 이름과 비밀번호를 받는다.
  async signIn(userName, pass) {
    //userService에 접근해서 findOne 함수에 userName을 넣어준다.
    //그후 findOne 함수에 의해서 이름과 일치하는 사용자의 정보가 user에 담긴다.
    const user = await this.userService.findOne(userName);
    // 만약 이름은 일치하지만 pass 가 다른경우라면
    if (user?.password != pass) {
      //오류를 발생시킨다.
      throw new UnauthorizedException();
    }
    // 사용자의 이름과 아이디를 payload에 담아준다.
    const payload = { userName: user.userName, sub: user.userId };
    return {
      // payload에 담긴 정보를 통해서 토큰을 생성한다.
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
