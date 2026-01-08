import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginVerisi: any): Promise<{
        token: string;
        id: number;
        username: string;
        email: string;
        photo: string;
        profileType: import("../profile-types/profile-type.entity").ProfileType;
        products: import("../product/product.entity").Product[];
    }>;
}
