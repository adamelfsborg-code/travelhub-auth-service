import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/auth/dtos/CreatedUser.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  createUser(userDetails: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  deleteUser(id: number) {
    return this.userRepository.update(id, { enabled: 0 });
  }

  updateUser(id: number, updateUserDto: CreateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }
}
