FROM node:latest

RUN mkdir -p /client/dist/app

WORKDIR /client/dist/app

COPY package*.json ./

COPY . /client/dist/app

RUN npm i 

EXPOSE 8000

CMD [ "npm", "run", "dock"]


