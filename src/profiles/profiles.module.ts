import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
// ŞU SATIRI EKLEMEMİZ LAZIM:
import { ProfileTypesModule } from '../profile-types/profile-types.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    ProfileTypesModule // <-- İŞTE EKSİK OLAN PARÇA BU!
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}