import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Query,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dtos/CreatedUser.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getUsers() {
    return this.authService.findUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.authService.findUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Patch()
  deleteUser(@Query('id') id: number) {
    return this.authService.deleteUser(id);
  }

  @Put()
  updateUser(@Query('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.authService.updateUser(id, updateUserDto);
  }
}
