import express from 'express';
import { login, registro } from '../controller/user.controller.js';
import verificarToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/registro', registro);
router.post('/login', login);
router.get('/dashboard',verificarToken,(req, res)=>{
    
    res.json({message: `Bienvenido`})
})


export default router;

