import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {
  //jwtService를 주입받는다.
  constructor(private jwtService: JwtService) {}

  //이 메서드는 요청이 라우트 핸들러에 도달하기전에 실행된다.
  //즉 컨트롤러로 도달하기전 먼저 여기 거친다음 return이 true 라면 그떄 컨트롤러로 이동한다.
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 클라이언트의 모든 요청정보를 request에 담는다.

    const request = context.switchToHttp().getRequest();
    //클라이언트의 헤더에서 JWT를 추출한다.

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // jwt를 검증한다. 이 과정에서 트큰이 유효하지않으면 예외를 발생시킨다.
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      // 검증된 페이로드를 요청 객체에 추가한다. 이후 라우트 핸들러에서 사용가능
      request['user'] = payload;
    } catch {
      //JWT 검증 실패하면 인증되지않은 것으로 간주하여 예외 발생
      throw new UnauthorizedException();
    }
    //모든 검증과정을 통과하면 true를 반환하여 요청을 허용한다.
    return true;
  }
  // 요청 헤더에서 Bearer 토큰을 추출하는 private 메서드이다.
  private extractTokenFromHeader(request: Request): string | undefined {
    // Authorization 헤더를 분리한다. 헤더가 없으면 빈배열 발생
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // 토큰 타입이 'Bearer' 인 경우에만 토큰을 반환한다.
    return type === `Bearer` ? token : undefined;
  }
}
