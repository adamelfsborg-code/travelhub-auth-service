import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  findUser(id: number) {
    return { id: id, name: 'John Doe' };
  }
}
