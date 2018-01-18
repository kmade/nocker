# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_IMG=node
ARG NODE_VERSION=9-alpine
ARG NODEMON_VERSION=latest
ARG NODE_ENV=production
ARG PORT=80
# ---- Base Node ----
FROM $NODE_IMG:$NODE_VERSION AS base
RUN mkdir -p /usr/src/app

EXPOSE $PORT 5858 9229

RUN npm i -g nodemon@$NODEMON_VERSION --loglevel error --unsafe-perm

HEALTHCHECK CMD curl -fs http://localhost:$PORT || exit 1

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --loglevel error && npm cache clean --force
RUN cp -a /tmp/node_modules /usr/src/app/

ENV PORT $PORT
ENV NODE_ENV $NODE_ENV
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Define working directory
WORKDIR /usr/src/app
ADD . /usr/src/app

CMD [ "node", "bin/server.js"]
