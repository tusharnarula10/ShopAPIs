import express from 'express';
const orderRouter = express.Router();
import { Order } from '../controllers/order';

const order = new Order()
orderRouter.post('/checkout', async (req, res) => {
    try {
        const response = await order.createOrder(req.body);
        res.send(response);
    } catch (error: any) {
        if (error.status) {
            res.statusCode = error.status;
            res.send(error.message)
        }
        else {
            res.statusCode = 500;
            res.send("Oops An error occured");
        }
    }
})

export default orderRouter;