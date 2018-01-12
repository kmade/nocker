#!/bin/bash
set -eu
IMAGE=kmade/app
docker run -d --rm \
  -v $(pwd):/app \
  -v /app/node_modules \
  -p 8081:8081 \
  -p 8080:8080 \
  --name app \
  $IMAGE \
  yarn start:dev

docker logs app -f
