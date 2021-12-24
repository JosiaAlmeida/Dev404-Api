import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import {User} from './User'

@Entity("objetivo")
class Objetivo{
    @PrimaryColumn()
    readonly id: string

    @Column()
    user_id: string

    @JoinColumn({name:"user_id"})
    userId: User

    @Column()
    type: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updade_at: Date

    constructor(){
        if(!this.id) this.id = uuid()
    }
}export {Objetivo}