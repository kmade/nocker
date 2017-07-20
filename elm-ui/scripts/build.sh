#!/bin/bash
set -eu
docker build -t kmade/ui . $@
