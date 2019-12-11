import { Middleware } from '@nexys/koa-lib';

const app = Middleware.Init;
const mountHandler = Middleware.Mount.mountHandler;

app.use(mountHandler('/', 'index'));

export default app;