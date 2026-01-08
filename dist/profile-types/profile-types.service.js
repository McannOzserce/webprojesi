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
exports.ProfileTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profile_type_entity_1 = require("./profile-type.entity");
let ProfileTypesService = class ProfileTypesService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async onModuleInit() {
        const count = await this.repo.count();
        if (count === 0) {
            console.log('--- Veritabanı boş, Profil Tipleri ekleniyor... ---');
            await this.repo.save([
                { name: 'Admin' },
                { name: 'User' },
                { name: 'Manager' },
                { name: 'Student' },
            ]);
        }
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(id) {
        return this.repo.findOneBy({ id });
    }
};
exports.ProfileTypesService = ProfileTypesService;
exports.ProfileTypesService = ProfileTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_type_entity_1.ProfileType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfileTypesService);
//# sourceMappingURL=profile-types.service.js.map