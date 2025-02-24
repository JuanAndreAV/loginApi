import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registro = async (req, res)=>{
try {
    const {email, password, role} = req.body
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({message: "Email ya existe"})
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    user = new User({email, password: hash, role: role || 'user'})

    await user.save()

    res.status(201).json({message: "Usuario creado con exito"})
} catch (error) {
    res.status(error)
}
    
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({message: "Email no existe"})
        };
        console.log(user)
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({message: "Contraseña incorrecta"})
        };
        
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"})
        console.log(token)
        res.json({token})
        //res.json({message: "Login exitoso"})
        
        
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
}


export {
registro,
login

}