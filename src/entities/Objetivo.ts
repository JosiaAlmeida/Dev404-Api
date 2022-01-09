import   {PrimaryColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne} from "typeorm";
import {v4 as uuid} from 'uuid'
import User from './User'

@Entity("objetivo")
export default class Objetivo{
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
}