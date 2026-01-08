import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileTypesService } from '../profile-types/profile-types.service'; // Bağlantı servisi

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private repo: Repository<Profile>,
    // Tip tablosuna erişmek için bu servisi çağırdık
    private profileTypesService: ProfileTypesService,
  ) {}

  async create(dto: CreateProfileDto, photoFilename: string) {
    // 1. Şifre Kontrolü
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Şifreler uyuşmuyor!');
    }

    // 2. Profil Tipini Bul (İlişki Kurma)
    const typeId = parseInt(dto.profileTypeId);
    const type = await this.profileTypesService.findOne(typeId);
    if (!type) throw new BadRequestException('Geçersiz Profil Tipi!');

    // 3. Resim Linki
    const photoUrl = `http://localhost:3000/uploads/${photoFilename}`;

    // 4. Kayıt (İlişkiyle Beraber)
    const newProfile = this.repo.create({
      username: dto.username,
      email: dto.email,
      password: dto.password,
      photo: photoUrl,
      profileType: type, // Nesne olarak atıyoruz
    });

    return await this.repo.save(newProfile);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const user = await this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('Kullanıcı bulunamadı');
    return user;
  }

  // Güncelleme Mantığı
  async update(id: number, updateData: any, photoFilename?: string) {
    const profile = await this.findOne(id);

    // Resim varsa güncelle
    if (photoFilename) {
      profile.photo = `http://localhost:3000/uploads/${photoFilename}`;
    }

    // Tip değiştiyse güncelle
    if (updateData.profileTypeId) {
       const newType = await this.profileTypesService.findOne(parseInt(updateData.profileTypeId));
       if (newType) profile.profileType = newType;
    }

    // Diğer alanlar
    if(updateData.username) profile.username = updateData.username;
    if(updateData.email) profile.email = updateData.email;
    
    // Şifre geldiyse güncelle
    if(updateData.password && updateData.confirmPassword) {
        if(updateData.password !== updateData.confirmPassword) throw new BadRequestException("Şifreler uyuşmuyor");
        profile.password = updateData.password;
    }

    return this.repo.save(profile);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.repo.remove(user);
  }
}