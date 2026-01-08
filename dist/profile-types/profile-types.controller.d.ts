import { ProfileTypesService } from './profile-types.service';
export declare class ProfileTypesController {
    private readonly service;
    constructor(service: ProfileTypesService);
    findAll(): Promise<import("./profile-type.entity").ProfileType[]>;
}
