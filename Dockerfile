FROM node:10.13-alpine as build-stage
WORKDIR /app
COPY . /app
RUN yarn install
# RUN yarn build
# CMD yarn start
