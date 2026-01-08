"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_type_entity_1 = require("./profile-type.entity");
const profile_types_service_1 = require("./profile-types.service");
const profile_types_controller_1 = require("./profile-types.controller");
let ProfileTypesModule = class ProfileTypesModule {
};
exports.ProfileTypesModule = ProfileTypesModule;
exports.ProfileTypesModule = ProfileTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profile_type_entity_1.ProfileType])],
        controllers: [profile_types_controller_1.ProfileTypesController],
        providers: [profile_types_service_1.ProfileTypesService],
        exports: [profile_types_service_1.ProfileTypesService],
    })
], ProfileTypesModule);
//# sourceMappingURL=profile-types.module.js.map