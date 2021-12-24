import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid'
import {User} from './User'

@Entity("pacote")
class Pacote{
    @PrimaryColumn()
    readonly id: string

    @Column()
    user_id: string

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    userId: User

    @Column()
    type: string

    @Column()
    name: string
    
    @Column()
    preco: string
    
    @Column()
    PaginaTotal: string
    
    @Column()
    BD: boolean
    
    @Column()
    Manutencao: string
    
    @Column()
    Descricao: string
    
    @Column()
    selecionado: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updade_at: Date

    constructor(){
        if(!this.id) this.id = uuid()
    }
}export {Pacote}