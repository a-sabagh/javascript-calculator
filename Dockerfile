FROM node:25-alpine3.21 AS build

COPY app/ /app

WORKDIR /app

RUN npm i

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80