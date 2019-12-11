import Router from 'koa-router';
import bodyParser from 'koa-body';
import Joi from '@hapi/joi';

import { Middleware } from '@nexys/koa-lib';

const { responseHandler } = Middleware;

const router = new Router();

router.get('/', bodyParser(), async ctx => {
  const { body } = ctx.request;
  const r = {message: 'hello world'}

  responseHandler(r, ctx);
});

export default router.routes();


 

