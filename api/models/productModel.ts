import db from '../../schema/index';
import productRouter from '../routes/product';

const product = db.products;
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

export class ProductModel {
    constructor() {

    }

    async getProductList(payload: any) {
        try {
            const searchTerm = payload.search;
            let conditionArray: any = [];
            let condition;

            if (searchTerm) {
                conditionArray.push({ title: { [Op.like]: `%${searchTerm.trim()}%` } });
                conditionArray.push({ description: { [Op.like]: `%${searchTerm.trim()}%` } });
                condition = {
                    [Op.or]: conditionArray
                };
            }
            else {
                condition = null;
            }

            let sort = payload.sort;
            let order = payload.order;
            let sortCondition: any;
            if (sort && order) {
                sortCondition = ['price', `${order.toUpperCase()}`]
            }
            else {
                sortCondition = ['id'];
            }

            const result = await product.findAll({
                where: condition,
                order: [sortCondition]

            });
            console.info("Response of get Product list model", result);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            console.error("Error in product model", error);
            throw error;
        }
    }

    async getProductById(id: number) {
        try {
            if (id && !Number.isNaN(id)) {

                const result = await product.findOne({
                    where: { id }
                });
                return JSON.parse(JSON.stringify(result));
            }
            else {
                throw 'Id not Valid';
            }
        } catch (error) {
            console.log("error in getProductById", error);
            throw error;
        }
    }
}
