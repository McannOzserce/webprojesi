import { 
  Controller, Get, Post, Body, Patch, Param, Delete, 
  UseInterceptors, UploadedFile, BadRequestException 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';

const storageConfig = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
    cb(null, `${randomName}${extname(file.originalname)}`);
  },
});

@Controller('profiles')
export class ProfilesController {
  constructor(private service: ProfilesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo', { storage: storageConfig }))
  create(@Body() dto: CreateProfileDto, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Fotoğraf yüklemek zorunludur!');
    return this.service.create(dto, file.filename);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo', { storage: storageConfig }))
  update(
    @Param('id') id: string, 
    @Body() body: any, 
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.service.update(+id, body, file?.filename);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}