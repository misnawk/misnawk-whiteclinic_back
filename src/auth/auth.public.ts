import { SetMetadata } from '@nestjs/common';

// 역할 권한이 필요없는 공개 경로에 대해서 처리할 데코레이터정의
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
