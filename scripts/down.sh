#!/usr/bin/env bash
set -eu
docker service rm $(docker service ls | grep 'kmade_' | awk '{print $2}')
docker service rm $(docker service ls | grep 'flow_' | awk '{print $2}')
docker service rm $(docker service ls | grep 'admin_' | awk '{print $2}')
