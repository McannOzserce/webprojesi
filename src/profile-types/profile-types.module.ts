import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileType } from './profile-type.entity';
import { ProfileTypesService } from './profile-types.service';
import { ProfileTypesController } from './profile-types.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileType])],
  controllers: [ProfileTypesController],
  providers: [ProfileTypesService],
  exports: [ProfileTypesService], // Başka yerlerde (ProfileModule) kullanmak için dışa açtık
})
export class ProfileTypesModule {}