// const express = require('express'); // CJS Common JS
import express from 'express' // ESM Ecmascript Module [Sirve con TS]
import cors from 'cors'
import 'dotenv/config'
import router from './router';
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';

connectDB()

// Instancia de Express (Servidor)
const app = express();

// Cors
app.use(cors(corsConfig))

// Leer datos de formulario
app.use(express.json())

app.use('/', router)

export default app;