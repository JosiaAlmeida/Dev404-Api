import   {PrimaryColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity} from "typeorm";
import {v4 as uuid} from 'uuid'


@Entity("users")
export default class User{
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    Bi:string

    @Column()
    Dev: string

    @Column()
    sexo: string

    @Column()
    empresa: string

    @Column()
    organizacao: string

    @Column()
    historia: string

    @Column()
    email: string

    @Column()
    number: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_up: Date
    
    constructor(){
        if(!this.id) this.id = uuid()
    }
}