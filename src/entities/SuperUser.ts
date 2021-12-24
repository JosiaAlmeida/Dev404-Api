import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import {Exclude} from 'class-transformer'

@Entity("SuperUser")
class SuperUser {
    @PrimaryColumn()
    id: string
    
    @Column()
    email: string

    @Exclude()
    @Column()
    password: string

    @Column()
    readonly Dev:string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
    constructor(){
        if(!this.id) this.id = uuid()
        this.Dev = "true"
    }
}export {SuperUser}