# 開発環境
FROM node:10.13-alpine as build-stage
WORKDIR /app
COPY . /app
RUN yarn install
CMD yarn start
