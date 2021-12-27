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
let Pacote = class Pacote {
    constructor() {
        if (!this.id)
            this.id = uuid();
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], Pacote.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "user_id", void 0);
__decorate([
    JoinColumn({ name: "user_id" }),
    ManyToOne(() => User),
    __metadata("design:type", User)
], Pacote.prototype, "userId", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "preco", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "PaginaTotal", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Pacote.prototype, "BD", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "Manutencao", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Pacote.prototype, "Descricao", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Pacote.prototype, "selecionado", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Pacote.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Pacote.prototype, "updade_at", void 0);
Pacote = __decorate([
    Entity("pacote"),
    __metadata("design:paramtypes", [])
], Pacote);
export default Pacote;
//# sourceMappingURL=Pacote.js.map