FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm i nodemon -g

CMD nodemon server.js

EXPOSE 5000

