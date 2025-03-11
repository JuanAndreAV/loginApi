import Product from "../models/Product.js";


const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, image } = req.body;
        const product = new Product({name, description, price, category, stock, image});
        await product.save();
        res.status(201).json({message: "Product created successfully"});
    } catch (error) {
        res.status(500).json({message: "Error creating product"});
    }
    

};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};
const editProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product) return res.status(404).json({message: "Product not found"})
        const {_id, name, description, price, category, stock, image} = req.body;
         product.name = name;   
         product.description = description;
         product.price = price;
         product.category = category;
         product.stock = stock;
         product.image = image;
         await product.save();
         res.status(200).json({message: "Producto editado con exito", product});

    } catch (error) {
        res.status(500).json({message: "Error al editar producto"});
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) return res.status(404).json({message: "Product not found"})
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.json({message: "Error deleting product"});
    }
}

export{
    createProduct,
    getProducts,
    editProduct,
    deleteProduct
};