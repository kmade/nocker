#!/usr/bin/env bash
set -eu

docker tag kmade/arm32v7.nginx kmade.net:5000/kmade/arm32v7.nginx
docker push kmade.net:5000/kmade/arm32v7.nginx