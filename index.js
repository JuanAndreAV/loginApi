//const express = require('express');
import express, { json } from 'express';
import routes from './routes/userRoutes.js'
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './dbConfig/dbconnection.js';                    

const app = express();

dotenv.config()

//app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.use('/auth',routes)



dbConnection()



app.listen(process.env.SERVER_PORT,()=>{
    console.log(`servidor escuchando en el puerto ${process.env.SERVER_PORT} `)
});