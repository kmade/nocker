#!/usr/bin/env bash
set -eu

# arm based
# docker-compose -f docker-compose.yml -f docker-compose.override.yml -f configuration/docker/docker-compose.prod.yml -f configuration/docker/arm/docker-compose.arm32.yml build --force-rm
# x86 based
docker-compose -f docker-compose.yml -f docker-compose.override.yml -f configuration/docker/docker-compose.prod.yml build
