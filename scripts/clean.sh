#!/usr/bin/env bash
set -eu

LOGS='volumes/logs'
NS='km/'
docker rm -f $(docker ps -aq) 2>/dev/null || echo "No more containers to remove."
docker rmi $(docker images | grep '${NS}' | cut -f1 -d ' ') -f 2>/dev/null || echo "No more ${NS} images to remove."
docker rmi $(docker images --filter "dangling=true" -q --no-trunc) -f 2>/dev/null || echo "No more images to remove."

rm -rf $LOGS/*.log.* 2>/dev/null || echo "No more logs to remove."
