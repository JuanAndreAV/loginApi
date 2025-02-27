import jwt from 'jsonwebtoken';

const verificarToken = (req, res, next) => {
    const token = req.header("Authorization")
    if (!token) return res.status(401).json({message:"No hay token"})
        
    try {
        const tokenWithoutBearer = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        
        const verifyUserToken = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET)
        
        req.user = verifyUserToken
        next()
     } catch (error) {
         res.status(403).json({message: "tóken invalido o expirado"})
     }    
};

const verifyEmailToken = (req, res, next) => {
    const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({message:"no hay tóken"})
    };
    try {
        
        const tokenWithoutBearer = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        console.log("token: "+tokenWithoutBearer)
        const verifyToken = jwt.verify(tokenWithoutBearer,process.env.JWT_SECRET);
        req.userId = verifyToken.id
        next()
    } catch (error) {
        res.status(403).json({message: "tóken invalido o expirado :("})
    }

};

export {
    verificarToken,
    verifyEmailToken
};