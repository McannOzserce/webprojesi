import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Category } from './category.entity';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async onModuleInit() {
    const count = await this.categoryRepository.count();
    if (count === 0) {
      await this.categoryRepository.save([{ name: 'Elektronik' }, { name: 'Giyim' }, { name: 'Mutfak' }]);
      console.log('✅ Kategoriler eklendi.');
    }
  }

  async findAll() {
    return await this.productRepository.find({
      relations: ['addedBy', 'categories'], // Veriyi çekerken ekleyeni de getirir
    });
  }

  async findAllCategories() {
    return await this.categoryRepository.find();
  }

  async create(data: any) {
    // En düz mantıkla ürün oluşturma
    const product = this.productRepository.create({
      name: data.name,
      price: data.price,
      // Frontend'den gelen profileId'yi direkt objeye bağlıyoruz
      addedBy: data.profileId ? { id: Number(data.profileId) } : undefined,
      categories: data.categoryIds ? data.categoryIds.map((id: any) => ({ id: Number(id) })) : [],
    });
    
    return await this.productRepository.save(product);
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}