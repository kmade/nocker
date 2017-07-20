Docker start-up framework for building KustomMad© applications

# ☢️ WORK IN PROGRESS


## Installing

### macOS

Download Docker app
- https://docs.docker.com/docker-for-mac/

- Install & configure [dnsmasq](https://passingcuriosity.com/2013/dnsmasq-dev-osx/)

```
brew install dnsmasq
```

- Fix docker-compose performance

`cat /etc/hosts`

```bash
## Docker compose issue
# https://github.com/docker/compose/issues/3419#issuecomment-221793401
127.0.0.1 localunixsocket.local
```

Allocate enough memory to docker APP: 8GB

## Usage


