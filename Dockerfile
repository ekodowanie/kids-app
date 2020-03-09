FROM node:13.1.0

RUN apt-get update && apt-get install -y

RUN mkdir -p /app

COPY . /var/www/backend
WORKDIR /var/www/backend

ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD yarn && dockerize -wait tcp://kids_app_database:3306 -timeout 60m npm run start:dev
