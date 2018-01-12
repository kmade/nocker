#!/usr/bin/env bash

IMAGE=kmade/api
docker run -d --rm \
  -v $(pwd):/app \
  -v /app/node_modules \
  -p 3000:3000 \
  -p 5858:5858 \
  --name api $IMAGE \
  yarn start:dev
docker logs api -f
