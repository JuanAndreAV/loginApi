//const express = require('express');
import express, { json } from 'express';
import authRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './dbConfig/dbconnection.js';                    

const app = express();

dotenv.config()

//app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.use('/api/auth',authRoutes)
app.use('/api/products',productRoutes)



dbConnection()


//conexión
app.listen(process.env.SERVER_PORT,'0.0.0.0',()=>{
    console.log(`servidor escuchando en el puerto ${process.env.SERVER_PORT} `)
});