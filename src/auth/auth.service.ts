// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../profiles/profile.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.profileRepository.findOne({ where: { email } });

    // Şifre kontrolü
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return { ...result, token: "basarili-token-123" };
    }

    // Kullanıcı yoksa veya şifre yanlışsa null dön
    return null;
  }
}