FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm i nodemon -g

CMD nodemon server.js

EXPOSE 4000

