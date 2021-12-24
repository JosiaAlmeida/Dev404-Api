import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid'
import {User} from './User'

@Entity("aparencia")
class Aparencia{
    @PrimaryColumn()
    readonly id: string

    @Column()
    user_id: string

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
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
}export {Aparencia}