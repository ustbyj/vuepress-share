FROM node

ADD . /app

WORKDIR /app

RUN yarn

CMD ["yarn", "run", "docs:dev"]