import express from 'express';
import { createProduct, getProductos } from '../controller/product.controller.js';


const router = express.Router();

router.post('/',createProduct);
router.get('/', getProductos)


export default router