#!/usr/bin/env bash
set -eu


# export KMADE_STACK=kmade
# export SWARM_NODE_ID=$(docker node inspect --format '{{ .ID }}' self)
# docker stack deploy -c docker-compose.status.yml kmade --resolve-image=never
# mkdir /etc/letsencrypt && export CERTBOTMODE=staging docker stack deploy -c docker-compose.prod.yml kmade --resolve-image=never --detach=false
#
# docker service rm $(docker service ls | grep 'kmade_' | awk '{print $2}')
# docker exec -it $(docker ps | grep 'kmade_letsencrypt.1' | awk '{print $11}') cat /var/log/letsencrypt/letsencrypt.log

# docker network create -d overlay swarm
# docker network create -d overlay --subnet=192.168.1.0/24 --gateway=192.168.1.1 swarm-overlay

# docker service create \
#     --name swarm-proxy \
#     --network swarm-overlay \
#     -p 80:80 \
#     -p 443:443 \
#     -e MODE=swarm \
#     -e LISTENER_ADDRESS=swarm-listener \
#     -e SERVICE_NAME=swarm-proxy \
#     --constraint "node.role==manager" \
#     --replicas 1 \
#     ahaurw01/docker-flow-proxy:armhf

# docker service create \
#     --name swarm-listener \
#     --network swarm-overlay \
#     --mount "type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock" \
#     -e DF_NOTIFY_CREATE_SERVICE_URL=http://swarm-proxy:8080/v1/docker-flow-proxy/reconfigure \
#     -e DF_NOTIFY_REMOVE_SERVICE_URL=http://swarm-proxy:8080/v1/docker-flow-proxy/remove \
#     --constraint "node.role==manager" \
#     --replicas 1 \
#     ahaurw01/docker-flow-swarm-listener:armhf

# docker service ps swarm-proxy
# docker service logs -f swarm-proxy
# docker service ps swarm-listener
# docker service logs -f swarm-listener

# docker service create \
#     --name swarm-ssl \
#     --network swarm-overlay \
#     --mount "type=bind,source=/hdd/kmade/configuration/ssl/letsencrypt,target=/etc/letsencrypt" \
#     -e DOMAIN_1="('kmade.net' 'admin.kmade.net' 'status.kmade.net')" \
#     -e CERTBOT_EMAIL=dragosh.oancea@email.com \
#     -e PROXY_ADDRESS=swarm-proxy \
#     -e CERTBOT_CRON_RENEW="('0 3 * * *')" \
#     --label com.df.servicePath=/.well-known/acme-challenge \
#     --label com.df.notify=true \
#     --label com.df.distribute=true \
#     --label com.df.port=80 \
#     --label com.df.port=443 \
#     --constraint "node.role==manager" \
#     --replicas 1 \
#     ahaurw01/docker-flow-letsencrypt:armhf

# docker service logs -f swarm-
docker stack deploy -c docker-stack.flow.yml flow --prune --resolve-image=never

docker stack deploy -c docker-stack.admin.yml admin --prune --resolve-image=never

docker stack deploy -c docker-stack.yml kmade --prune --resolve-image=never

