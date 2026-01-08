import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileTypesService } from '../profile-types/profile-types.service';
export declare class ProfilesService {
    private repo;
    private profileTypesService;
    constructor(repo: Repository<Profile>, profileTypesService: ProfileTypesService);
    create(dto: CreateProfileDto, photoFilename: string): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: number): Promise<Profile>;
    update(id: number, updateData: any, photoFilename?: string): Promise<Profile>;
    remove(id: number): Promise<Profile>;
}
