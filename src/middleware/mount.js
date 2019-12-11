import mount from 'koa-mount';

export const mountHandler = (route, path) => {
  path = path || route;

  console.log(path)
  console.log(route)
  return mount(`${route}`, require('../routes/' + path).default);
}