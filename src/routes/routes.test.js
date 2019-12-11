// references
// * https://stackoverflow.com/a/56250986/1659569
// * https://zellwk.com/blog/endpoint-testing/
// * https://codeburst.io/lets-build-a-rest-api-with-koa-js-and-test-with-jest-2634c14394d3
import * as http from 'http';
import supertest from 'supertest';
import app from '../app.js';

const request = supertest(http.createServer(app.callback()))

it('gets the test endpoint', async done => {
  const response = await request.get('/')

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('hello world');
  done();
});
