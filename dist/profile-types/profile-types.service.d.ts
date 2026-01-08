import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProfileType } from './profile-type.entity';
export declare class ProfileTypesService implements OnModuleInit {
    private repo;
    constructor(repo: Repository<ProfileType>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<ProfileType[]>;
    findOne(id: number): Promise<ProfileType | null>;
}
