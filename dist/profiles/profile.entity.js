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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const typeorm_1 = require("typeorm");
const profile_type_entity_1 = require("../profile-types/profile-type.entity");
const product_entity_1 = require("../product/product.entity");
let Profile = class Profile {
    id;
    username;
    password;
    email;
    photo;
    profileType;
    products;
};
exports.Profile = Profile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profile_type_entity_1.ProfileType, (profileType) => profileType.profiles, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", profile_type_entity_1.ProfileType)
], Profile.prototype, "profileType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.addedBy),
    __metadata("design:type", Array)
], Profile.prototype, "products", void 0);
exports.Profile = Profile = __decorate([
    (0, typeorm_1.Entity)()
], Profile);
//# sourceMappingURL=profile.entity.js.map