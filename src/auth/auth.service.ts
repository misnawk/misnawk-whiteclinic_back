import { Injectable, UnauthorizedException } from '@nestjs/common';
import { promises } from 'dns';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  //인스턴스 주입
  constructor(private userService: UsersService) {}

  // 서버는 동시에 작업을 해야하는 상황이 있기에 비동기 로직으로 구현
  async signIn(userName: string, pass: string): Promise<any> {
    // userService에서 findone 함수를 사용해서 일치하는 이름을 가진 정보를 담아줌
    const user = await this.userService.findOne(userName);
    console.log(user);

    //일치하는 정보가 없다면 예외 발생
    if (user?.password !== pass) {
      console.log('일치하는 정보가 없음');

      throw new UnauthorizedException();
    }
    //password 를 제외한 나머지 사용자의 정보를 result에 담는다.
    const { password, ...result } = user;

    return result;
  }
}
