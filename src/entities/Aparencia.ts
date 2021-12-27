const {PrimaryColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne} = require("typeorm");
const {v4} = require('uuid')
import User from './User'

@Entity("aparencia")
export default class Aparencia{
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
        if(!this.id) this.id = v4()
    }
}