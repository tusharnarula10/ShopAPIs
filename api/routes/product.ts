import express from 'express';
const productRouter = express.Router();
import { Product } from '../controllers/product';

const product = new Product();

productRouter.get('/getProductList',async (req, res) => {
   try {
      const response = await product.getProductList(req.query);
      res.send(response);
   } catch (error) {
      res.statusCode = 500;
      res.send("Unknown error occured");
   }
   
});

export default productRouter;