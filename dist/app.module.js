"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const profiles_module_1 = require("./profiles/profiles.module");
const profile_types_module_1 = require("./profile-types/profile-types.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./product/products.module");
const profile_entity_1 = require("./profiles/profile.entity");
const profile_type_entity_1 = require("./profile-types/profile-type.entity");
const product_entity_1 = require("./product/product.entity");
const category_entity_1 = require("./product/category.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [profile_entity_1.Profile, profile_type_entity_1.ProfileType, product_entity_1.Product, category_entity_1.Category],
                synchronize: true,
            }),
            profiles_module_1.ProfilesModule,
            profile_types_module_1.ProfileTypesModule,
            auth_module_1.AuthModule,
            products_module_1.ProductsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map