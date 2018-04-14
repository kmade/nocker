#!/usr/bin/env bash
set -eu

docker-compose -f docker-compose.yml \
    -f docker-compose.override.yml \
    -f configuration/docker/docker-compose.prod.yml \
    -f configuration/docker/arm/docker-compose.arm32.yml \
    push
