#!/usr/bin/env bash

IMAGE=kmade/api
docker build -t $IMAGE . $@
