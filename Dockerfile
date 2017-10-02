FROM node:8

RUN mkdir -p /var/www/rp2017-front-1-ruhm

WORKDIR /var/www/rp2017-front-1-ruhm

COPY package.json /var/www/rp2017-front-1-ruhm/package.json
COPY package-lock.json /var/www/rp2017-front-1-ruhm/package-lock.json
COPY webpack.config.js /var/www/rp2017-front-1-ruhm/webpack.config.js

RUN npm install

VOLUME /var/www/rp2017-front-1-ruhm
