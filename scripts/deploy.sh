#!/usr/bin/env bash
set -eu

docker stack deploy -c docker-stack.yml kmade --prune --resolve-image=never