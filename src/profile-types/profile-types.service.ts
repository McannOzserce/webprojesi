import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileType } from './profile-type.entity';

@Injectable()
export class ProfileTypesService implements OnModuleInit {
  constructor(
    @InjectRepository(ProfileType)
    private repo: Repository<ProfileType>,
  ) {}

  // Proje başlayınca çalışır: Veritabanı boşsa doldurur
  async onModuleInit() {
    const count = await this.repo.count();
    if (count === 0) {
      console.log('--- Veritabanı boş, Profil Tipleri ekleniyor... ---');
      await this.repo.save([
        { name: 'Admin' },
        { name: 'User' },
        { name: 'Manager' },
        { name: 'Student' },
      ]);
    }
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
}