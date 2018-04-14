#!/usr/bin/env bash
set -eu

cd /hdd/kmade/
docker stack deploy -c docker-stack.yml kmade --prune --resolve-image=never