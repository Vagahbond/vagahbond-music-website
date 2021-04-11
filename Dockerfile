FROM node:14-alpine AS build

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run export

FROM nginx:1.17.10-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/out /usr/share/nginx/html

EXPOSE 80

RUN echo "NEXTjs app running on port 80 !"
