"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
const category_entity_1 = require("./category.entity");
let ProductsService = class ProductsService {
    productRepository;
    categoryRepository;
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async onModuleInit() {
        const count = await this.categoryRepository.count();
        if (count === 0) {
            await this.categoryRepository.save([{ name: 'Elektronik' }, { name: 'Giyim' }, { name: 'Mutfak' }]);
            console.log('✅ Kategoriler eklendi.');
        }
    }
    async findAll() {
        return await this.productRepository.find({
            relations: ['addedBy', 'categories'],
        });
    }
    async findAllCategories() {
        return await this.categoryRepository.find();
    }
    async create(data) {
        const product = this.productRepository.create({
            name: data.name,
            price: data.price,
            addedBy: data.profileId ? { id: Number(data.profileId) } : undefined,
            categories: data.categoryIds ? data.categoryIds.map((id) => ({ id: Number(id) })) : [],
        });
        return await this.productRepository.save(product);
    }
    async remove(id) {
        return await this.productRepository.delete(id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map