import { ProductQuery } from '@nexys/lib';

const host = process.env.PRODUCT_HOST;
const token = process.env.APP_TOKEN;

export default new ProductQuery(host, token);
