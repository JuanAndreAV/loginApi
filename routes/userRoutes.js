import express from 'express';
import { login, registro, forgotPassword, resetPassword } from '../controller/user.controller.js';
import {verificarToken, verifyEmailToken} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/registro', registro);
router.post('/login', login);

router.get('/dashboard',verificarToken,(req, res)=>{
    res.json({message: `Bienvenido`})
});
//recuperar contraseña
router.post('/forgot-password', forgotPassword )
router.post('/reset-password',verifyEmailToken, resetPassword)
    




export default router;

