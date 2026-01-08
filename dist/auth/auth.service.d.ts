import { Repository } from 'typeorm';
import { Profile } from '../profiles/profile.entity';
export declare class AuthService {
    private profileRepository;
    constructor(profileRepository: Repository<Profile>);
    validateUser(email: string, pass: string): Promise<{
        token: string;
        id: number;
        username: string;
        email: string;
        photo: string;
        profileType: import("../profile-types/profile-type.entity").ProfileType;
        products: import("../product/product.entity").Product[];
    } | null>;
}
