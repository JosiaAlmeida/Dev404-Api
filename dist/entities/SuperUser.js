var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from 'class-transformer';
let SuperUser = class SuperUser {
    constructor() {
        if (!this.id)
            this.id = uuid();
        this.Dev = "true";
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], SuperUser.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SuperUser.prototype, "email", void 0);
__decorate([
    Exclude(),
    Column(),
    __metadata("design:type", String)
], SuperUser.prototype, "password", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], SuperUser.prototype, "Dev", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], SuperUser.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], SuperUser.prototype, "updated_at", void 0);
SuperUser = __decorate([
    Entity("SuperUser"),
    __metadata("design:paramtypes", [])
], SuperUser);
export default SuperUser;
//# sourceMappingURL=SuperUser.js.map