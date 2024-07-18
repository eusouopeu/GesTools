import express, { Express } from "express";
import router from "./Routes/router";
import path from 'path'

const server:Express = express()
const port = 3210

server.use(express.json())
server.use('/', router)

server.listen(port, () => {
    console.log(`Servidor lançado e ativo na porta ${port}! Pronto pra receber requisições!`)
})
