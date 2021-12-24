import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'


Entity("users")
class User{
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    Bi:string

    @Column()
    sexo: string

    @Column()
    empresa: string

    @Column()
    organizacao: string

    @Column()
    historia: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_up: Date
    
    constructor(){
        if(!this.id) this.id = uuid()
    }
}export {User}