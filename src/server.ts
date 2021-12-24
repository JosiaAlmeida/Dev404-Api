import "dotenv/config"
import express from 'express'
import 'reflect-metadata'
import { routerUser } from './Routes/userRoutes'

import './database'
import { routerType } from './Routes/tipeRoutes'
import { routerAparencia } from './Routes/aparenciaRouter'
import { routerQualidade } from './Routes/qualidadeRouter'
import { routerObjetivo } from './Routes/objetivo'
import { routerPacote } from './Routes/pacoteRouter'
import { routesUserActive } from "./Routes/UserActiveRouter"

const server = express()


server.use(express.json())

server.use('/user', routerUser)
server.use('/type', routerType)
server.use('/aparencia', routerAparencia)
server.use('/qualidade', routerQualidade)
server.use('/objetivo',routerObjetivo)
server.use('/pacote', routerPacote)
server.use('/ActiveUser', routesUserActive)

server.listen(3001,()=> console.log("Servidor rodando na porta 3001"))