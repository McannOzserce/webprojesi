import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAllCategories(): Promise<import("./category.entity").Category[]>;
    findAll(): Promise<import("./product.entity").Product[]>;
    create(data: any): Promise<import("./product.entity").Product>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
