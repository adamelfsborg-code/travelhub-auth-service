import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.authService.findUser(id);
  }
}
