FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY .  .

RUN echo "starting the appklication...."

EXPOSE 3000

CMD npm start

