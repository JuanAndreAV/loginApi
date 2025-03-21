import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    stock: { type: Number, default: 0 },
    image: { type: String }, // URL de la imagen
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);
export default Product;