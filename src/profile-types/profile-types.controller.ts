import { Controller, Get } from '@nestjs/common';
import { ProfileTypesService } from './profile-types.service';

@Controller('profileTypes')
export class ProfileTypesController {
  constructor(private readonly service: ProfileTypesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}