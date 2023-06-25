FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app
COPY package.json ./
RUN npm install -g serve

ADD /build ./

ENTRYPOINT [ "serve", "-s", "-p", "5000", "build" ]