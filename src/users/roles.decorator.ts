import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

//roles 라는 문자열 값을 ROLES_KEY 상수로 선언한다.
//이 상수는 메타데이터 키로서 사용되며, Nest.js 내에서 역할 관련 메타데이터를 식별하는 데 사용된다.
export const ROLES_KEY = 'roles';
//이 데코레이터를 사용하면, 해당 메서드나 클래스가 특정 역할을 가진 사용자에 의해서만 접근가능
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
