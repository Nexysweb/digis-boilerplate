// todo: upgrade with a "real" config
import { ds, string } from '@nexys/utils';

const inProd = process.env.NODE_ENV === 'production';
if (inProd) {
  Object.entries(process.env).forEach(([key, value]) => process.env[key] = string.parseEnvVar(value));
} else {
  require('dotenv').config();
}

const product = {
  service: {
    host: process.env.PRODUCT_HOST,
    token: process.env.APP_TOKEN,
  }
};

const port = process.env.PORT || 3000;

export {
  port,
  product,
  inProd
};