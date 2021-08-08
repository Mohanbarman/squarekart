FROM node:16

RUN mkdir -p /home/app

COPY package*json .

RUN npm install

COPY . .

CMD ['npm', 'start']