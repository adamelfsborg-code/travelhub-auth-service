import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
