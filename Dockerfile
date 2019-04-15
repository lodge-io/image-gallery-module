FROM node:latest

RUN mkdir -p /client/dist/app

WORKDIR /client/dist/app

COPY package*.json ./

RUN npm install

COPY . /client/dist/app

EXPOSE 3000

CMD ["npm", "run", "start", "dock"]
