import productRouter from "./product";
import orderRouter from "./order";
import express from 'express';

const rootRouter = express.Router();

rootRouter.use('/product',productRouter);
rootRouter.use('/order',orderRouter);

export default rootRouter;
