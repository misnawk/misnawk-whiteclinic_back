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
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === `Bearer` ? token : undefined;
  }
}
