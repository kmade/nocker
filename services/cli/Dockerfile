FROM node:8-alpine AS base

EXPOSE 4444

# Provides cached layer for node_modules
ADD package.json /tmp/package.json

RUN yarn add global hexo-cli
RUN cd /tmp && yarn

RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# Define working directory
WORKDIR /app
ADD . /app
