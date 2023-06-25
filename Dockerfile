FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app
COPY package.json ./
RUN npm install -g serve

ADD /build ./

ENTRYPOINT [ "npx", "serve", "-s", "-p", "5000", "." ]