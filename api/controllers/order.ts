import {OrderModel} from "../models/orderModel"


export class Order {
    private orderModel:any
    constructor(){
        this.orderModel = new OrderModel();
    }

    async createOrder(payload:any){
        try {
            console.info("Started function createOrder with payload",payload);
            const result = await this.orderModel.createOrder(payload);
            return result;
        } catch (error) {
            console.error('Error in createOrder controller',error);
            throw error;
        }
    }

}