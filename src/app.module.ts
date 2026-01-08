import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Modüller
import { ProfilesModule } from './profiles/profiles.module';
import { ProfileTypesModule } from './profile-types/profile-types.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './product/products.module';

// Entity'ler
import { Profile } from './profiles/profile.entity';
import { ProfileType } from './profile-types/profile-type.entity';
import { Product } from './product/product.entity'; // YOL DÜZELTİLDİ: Genelde 'products' klasöründedir
import { Category } from './product/category.entity';

@Module({
  imports: [
    // Resimlerin yüklenmesi için statik klasör
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    
    // Veritabanı Yapılandırması
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      // KRİTİK DÜZELTME: Product buraya eklendi, böylece Profile içindeki ilişkiyi bulabilecek.
      entities: [Profile, ProfileType, Product,Category], 
      synchronize: true, // Geliştirme aşamasında tabloları otomatik oluşturur
    }),

    // Özellik Modülleri
    ProfilesModule,
    ProfileTypesModule,
    AuthModule,
    ProductsModule, 
  ],
})
export class AppModule {}