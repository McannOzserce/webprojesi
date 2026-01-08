import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Category } from './category.entity';
export declare class ProductsService implements OnModuleInit {
    private productRepository;
    private categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<Product[]>;
    findAllCategories(): Promise<Category[]>;
    create(data: any): Promise<Product>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
