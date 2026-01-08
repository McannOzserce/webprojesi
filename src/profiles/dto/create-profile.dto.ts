import { IsString, IsEmail, Matches, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty({ message: 'Kullanıcı adı zorunludur' })
  username: string;

  @IsEmail({}, { message: 'Geçerli bir email giriniz' })
  email: string;

  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'Şifre: 1 büyük, 1 küçük harf, 1 sayı ve 1 sembol içermeli' }
  )
  password: string;

  @IsString() // Frontend form-data gönderdiği için boş gelebilir, kontrolü serviste yaparız
  confirmPassword: string;

  // Yeni Eklenen: Profil Tipi ID'si (String gelir, sayıya çeviririz)
  @IsString()
  @IsNotEmpty({ message: 'Lütfen bir profil tipi seçiniz' })
  profileTypeId: string;
}