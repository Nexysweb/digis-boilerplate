FROM node:12.5.0-alpine

COPY package.json package.json
RUN yarn install
COPY babel.config.js babel.config.js

COPY src src
RUN mkdir locales

ENV NODE_ENV=production
RUN yarn build

CMD ["yarn", "start"]
