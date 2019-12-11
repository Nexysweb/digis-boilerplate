import { HTTPError as Error } from '@nexys/http';

export const responseHandler = async (r, ctx) => {
  if (r.isError) {
    const body = typeof r.message === 'string' ? {message: r.message} : r.message;
    // todo generalize to all status, ctx.status(statusCode).response(r), see attempt below
    // todo: check if below works
    /*ctx.status = r.statusCode;
    ctx.body = body;*/

    switch (r.statusCode) {
      case 404:
        ctx.notFound(body);
        return;
      case 500:
        ctx.internalServerError(body);
        return;
      default:
        ctx.status = 400;
        ctx.body = body;
        //ctx.badRequest(body);
        return;
    }    
  }

  ctx.ok(r);
}