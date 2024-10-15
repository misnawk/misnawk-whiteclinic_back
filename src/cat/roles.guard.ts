import { Dependencies, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
  constructor(reflector) {
    this.reflector = reflector;
  }

  //가드의 주요 메서드 : 요청 처리 여부를 결정한다.
  canActivate(context){
    const requiredRoles = this.reflector
  }

}
