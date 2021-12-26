"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperUserRepositories = void 0;
const typeorm_1 = require("typeorm");
const SuperUser_1 = require("../entities/SuperUser");
let SuperUserRepositories = class SuperUserRepositories extends typeorm_1.Repository {
};
SuperUserRepositories = __decorate([
    (0, typeorm_1.EntityRepository)(SuperUser_1.SuperUser)
], SuperUserRepositories);
exports.SuperUserRepositories = SuperUserRepositories;
