FROM kmade/harbor-polymer:latest

EXPOSE 8081 5858
EXPOSE 8080

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && yarn --flat --prod --non-interactive

RUN mkdir -p /app \
  && cp -a /tmp/node_modules /app/

# Define working directory
WORKDIR /app
ADD . /app


