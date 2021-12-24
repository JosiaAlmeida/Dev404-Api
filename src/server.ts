import express from 'express'
import 'reflect-metadata'

const server = express()



server.listen(3000,()=> console.log("Servidor rodando na porta 3000"))