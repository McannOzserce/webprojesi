import { ProfileType } from '../profile-types/profile-type.entity';
import { Product } from '../product/product.entity';
export declare class Profile {
    id: number;
    username: string;
    password: string;
    email: string;
    photo: string;
    profileType: ProfileType;
    products: Product[];
}
