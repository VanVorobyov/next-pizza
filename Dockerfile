FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN yarn install && yarn build

EXPOSE 3010

CMD ["yarn", "start", "-p", "3010", "-H", "0.0.0.0"]
