import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.URI)
        .then(()=>console.log("conectado a mongo"))
    }
    catch (error) {
        console.log(error)
    }
};

export default dbConnection;