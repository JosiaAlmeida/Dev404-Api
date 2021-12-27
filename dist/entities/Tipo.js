var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from 'uuid';
import User from './User';
let Tipo = class Tipo {
    constructor() {
        if (!this.id)
            this.id = uuid();
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], Tipo.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Tipo.prototype, "user_id", void 0);
__decorate([
    JoinColumn({ name: "user_id" }),
    ManyToOne(() => User),
    __metadata("design:type", User)
], Tipo.prototype, "userId", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Tipo.prototype, "type", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Tipo.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Tipo.prototype, "updade_at", void 0);
Tipo = __decorate([
    Entity("type"),
    __metadata("design:paramtypes", [])
], Tipo);
export default Tipo;
//# sourceMappingURL=Tipo.js.map