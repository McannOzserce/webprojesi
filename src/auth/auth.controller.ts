import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginVerisi: any) {
    // 1. Servise gidip kontrolü yapıyoruz
    const result = await this.authService.validateUser(loginVerisi.email, loginVerisi.password);

    // 2. Eğer servis 'null' döndüyse (şifre yanlışsa) hata fırlatıyoruz
    if (!result) {
      // Bu satır sayesinde React artık .then'e değil .catch'e düşecek
      throw new UnauthorizedException('E-posta veya şifre hatalı!');
    }

    // 3. Eğer her şey doğruysa veriyi gönderiyoruz
    return result;
  }
}