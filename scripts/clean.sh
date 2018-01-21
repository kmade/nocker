#!/usr/bin/env bash
set -eu

LOGS='volumes/logs'

docker rm -f $(docker ps -a -q)

rm -rf $LOGS/letsencrypt/letsencrypt.log.*
