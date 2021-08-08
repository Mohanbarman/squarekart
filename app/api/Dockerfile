FROM node:16

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

RUN yarn install

CMD ["yarn", "start:api"]