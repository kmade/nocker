FROM kmade/harbor-elm:latest

EXPOSE 8000
# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && yarn && elm-package install -y

RUN mkdir -p /app \
  && cp -a /tmp/node_modules /app/ \
  && cp -a /tmp/elm-stuff /app/

# Define working directory
WORKDIR /app
ADD . /app
