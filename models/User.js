import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    email: {type : String, required: true, unique: true},
    password: {type : String, required: true},
    role: {type : String, enum : ['user', 'admin'], default : 'user' } 
    }); 
const User = mongoose.model('User', mySchema);

export default User;