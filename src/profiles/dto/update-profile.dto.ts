import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';

// CreateProfileDto'daki her şeyi alır ama hepsini 'isteğe bağlı' yapar.
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}