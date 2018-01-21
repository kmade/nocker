#!/usr/bin/env bash
set -eu

host="$1"
shift
cmd="$@"
echo "Waiting for $host"
while ! curl -fs $host > /dev/null; do
  echo "Still waiting for $host";
  sleep 3;
done;

>&2 echo "$host is up - executing $cmd"
exec $cmd