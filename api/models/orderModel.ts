import db from '../../schema/index';
import { ProductModel } from './productModel';
const order = db.order;
const product = db.products;
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

export class OrderModel {
    private productModel: any;

    constructor() {
        this.productModel = new ProductModel();

    }

    async createOrder(payload: any) {
        const t = await sequelize.transaction();
        try {


            let orderArray = [];
            let totalAmount = 0;
            let orderId = Math.random() + (Date.now() / 1000);
            for (let index = 0; index < payload.order.length; index++) {

                const element = payload.order[index];
                let orderObject: any = {};
                const productDetail = await this.productModel.getProductById(element.id);

                if (productDetail && productDetail.quantity >= element.quantity) {

                    orderObject.customerName = payload.customerName;
                    orderObject.productTotal = element.quantity * productDetail.price;
                    orderObject.quantity = element.quantity;
                    orderObject.productId = element.id;
                    orderObject.orderId = orderId;
                    totalAmount += orderObject.productTotal;
                    orderObject.totalOrderAmount = 0;

                    orderArray.push(orderObject);

                    await product.update({ quantity: (productDetail.quantity - element.quantity) }, {
                        where: { id: productDetail.id }
                    }, { transaction: t });

                }
                else {
                    throw { status: 500, message: "Product is out of stock" }
                }
            }

            orderArray.forEach((element) => {
                element.totalOrderAmount = totalAmount;
            });

            console.log("orderArray", orderArray);
            const result = JSON.parse(JSON.stringify(await order.bulkCreate(orderArray, { transaction: t })));

            t.commit();

            console.info("Response of create order model", result);

            return { orderId: Math.ceil(result[0].orderId), totalAmount: result[0].totalOrderAmount, status:'SUCCESS' };
        } catch (error) {
            console.error("Error in order model", error);
            t.rollback();
            throw error;
        }
    }
}
