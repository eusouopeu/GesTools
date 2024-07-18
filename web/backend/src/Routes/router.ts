import express, { Router, json } from "express"
import cors from 'cors'

const path = require('path')

// Roteamento dos processos 
const router = Router()
router.use(json())
router.use(cors())

// Rotas GET

// Rotas POST
// Rotas DELETE

export default router