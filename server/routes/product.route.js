import { route } from 'express';
import { createPost } from '../controllers/product.controller.js';

const productRouter = route();

productRouter.post('/', createPost);

export default productRouter;