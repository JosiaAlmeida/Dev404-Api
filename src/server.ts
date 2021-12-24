import express from 'express'
import 'reflect-metadata'
import { routerUser } from './Routes/userRoutes'

import './database'

const server = express()


server.use(express.json())

server.use('/user', routerUser)

server.listen(3001,()=> console.log("Servidor rodando na porta 3001"))