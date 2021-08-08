FROM node:16

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*json .

RUN yarn install

COPY . .

CMD ['yarn', 'start']