import express from 'express'
import { NextFunction, Request, Response } from "express"

import "dotenv/config"
// import './util/module-alias';
import 'reflect-metadata'
import cors from 'cors'
import routerUser from './Routes/userRoutes'
require('./database')
import routerType from './Routes/tipeRoutes'
import routerAparencia from './Routes/aparenciaRouter'
import routerQualidade from './Routes/qualidadeRouter'
import routerObjetivo from './Routes/objetivo'
import routerPacote from './Routes/pacoteRouter'
import routesUserActive from "./Routes/UserActiveRouter"

const server = express()

server.use(cors())

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/user', routerUser)
server.use('/type', routerType)
server.use('/aparencia', routerAparencia)
server.use('/qualidade', routerQualidade)
server.use('/objetivo',routerObjetivo)
server.use('/pacote', routerPacote)
server.use('/ActiveUser', routesUserActive)
server.get('/',(req, res)=>{
    res.send("Dev404-API")
})

server.use((req:Request,res:Response,next:NextFunction)=> next())

server.listen(process.env.PORT || 3000,()=> console.log("Dev404-API"))