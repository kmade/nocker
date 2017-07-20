FROM kmade/harbor-node:latest
EXPOSE 4000
EXPOSE 5858

RUN npm i -g nodemon --loglevel error
# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && yarn

RUN mkdir -p /app \
  && cp -a /tmp/node_modules /app/

# Define working directory
WORKDIR /app
ADD . /app

