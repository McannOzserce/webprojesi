import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Profile } from '../profiles/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}