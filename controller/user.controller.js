import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmail from "../services/emailservice.js";
import { verifyEmailToken } from "../middlewares/authMiddleware.js";



const registro = async (req, res)=>{
try {
    const {name, email, password, role} = req.body
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({message: "Este email ya está registrado, favor inicia sesión"})
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    user = new User({name, email, password: hash, role: role || 'user'})

    await user.save()

    res.status(201).json({message: "Usuario creado con éxito!"})
} catch (error) {
    res.status(error)
}   
};

const login = async (req, res)=>{
    try {
        const { email, password} = req.body
        const user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({message: "Este usuario no existe, favor registrarse"})
        };
        //console.log(user)
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({message: "Contraseña incorrecta"})
        };
        
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"})
        const { role, name} = user
        //console.log(token)
        res.json({ name, role, token})
        //res.json({message: "Login exitoso"})  
        
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

const forgotPassword = async(req, res)=>{
    const {email} = req.body
    try {
        const checkUser = await User.findOne({email})
        if(!checkUser){
            return res.status(400).json({message: "Usuario no existe"})
        };
        
        const token = jwt.sign({id: checkUser._id}, process.env.JWT_SECRET, {expiresIn:'15m'})
       
        await sendEmail(email, token);
        res.json({message: `Se ha enviado un correo para recuperar la contraseña. Token: ${token}`})
    } catch (error) {
        res.json(error)
    }  
};

const resetPassword = async (req, res) => {
    try {
    const { newPassword } = req.body;
    const userId = req.userId;
    const user = await User.findById(userId);
    if(!user){
        return res.status(404).json({message: "usuario no encontrado"})
    };
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.json({ message: "Contraseña actualizada con éxito" });
        
    } catch (error) {
        //console.error(error);
        return res.status(500).json({ message: "Error al actualizar la contraseña" });
    }

  
   

}




export {
registro,
login,
forgotPassword,
resetPassword

}