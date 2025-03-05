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

const getProductos = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
}

export{
    createProduct,
    getProductos
};