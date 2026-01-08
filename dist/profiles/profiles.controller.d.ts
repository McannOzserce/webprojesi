import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
export declare class ProfilesController {
    private service;
    constructor(service: ProfilesService);
    findAll(): Promise<import("./profile.entity").Profile[]>;
    findOne(id: string): Promise<import("./profile.entity").Profile>;
    create(dto: CreateProfileDto, file: Express.Multer.File): Promise<import("./profile.entity").Profile>;
    update(id: string, body: any, file: Express.Multer.File): Promise<import("./profile.entity").Profile>;
    remove(id: string): Promise<import("./profile.entity").Profile>;
}
