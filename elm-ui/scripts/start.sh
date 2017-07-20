#!/bin/bash
set -eu
IMAGE=kmade/ui
docker run -d --rm \
  -v $(pwd):/app \
  -v $(pwd)/elm-stuff:/app/elm-stuff \
  -v /app/node_modules \
  -p 8000:8000 \
  --name ui \
  $IMAGE \
  yarn start:dev

docker logs ui -f
