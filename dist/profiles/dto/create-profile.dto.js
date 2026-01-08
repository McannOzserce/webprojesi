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
exports.CreateProfileDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProfileDto {
    username;
    email;
    password;
    confirmPassword;
    profileTypeId;
}
exports.CreateProfileDto = CreateProfileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Kullanıcı adı zorunludur' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Geçerli bir email giriniz' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Şifre: 1 büyük, 1 küçük harf, 1 sayı ve 1 sembol içermeli' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Lütfen bir profil tipi seçiniz' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "profileTypeId", void 0);
//# sourceMappingURL=create-profile.dto.js.map