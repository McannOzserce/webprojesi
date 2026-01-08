import { Profile } from '../profiles/profile.entity';
import { Category } from './category.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    addedBy: Profile;
    categories: Category[];
}
