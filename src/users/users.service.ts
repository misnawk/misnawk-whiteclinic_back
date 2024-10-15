import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'min',
      password: 'minsuk',
    },
    {
      userId: 2,
      username: 'minmin',
      password: 'minsuksuk',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === userName);
  }
}
