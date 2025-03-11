import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';
import { createProduct, getProducts, editProduct, deleteProduct } from '../controller/product.controller.js';


const router = express.Router();

router.post('/',verificarToken, createProduct);
router.get('/', getProducts);
router.patch('/:id', editProduct);
router.delete('/:id', deleteProduct)



export default router