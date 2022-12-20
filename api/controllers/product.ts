import {ProductModel} from "../models/productModel"


export class Product {
    private productModel:any
    constructor(){
        this.productModel = new ProductModel();
    }

    async getProductList(payload:any){
        try {
            console.info("Started function getProductList with payload",payload);
            const result = await this.productModel.getProductList(payload);
            return result;
        } catch (error) {
            console.error('Error in getProductList controller',error);
            throw error;
        }
    }

}