```
    __      _     ____      __   ___    _____   ______    
   /  \    / )   / __ \    () ) / __)  / ___/  (   __ \   
  / /\ \  / /   / /  \ \   ( (_/ /    ( (__     ) (__) )  
  ) ) ) ) ) )  ( ()  () )  ()   (      ) __)   (    __/   
 ( ( ( ( ( (   ( ()  () )  () /\ \    ( (       ) \ \  _  
 / /  \ \/ /    \ \__/ /   ( (  \ \    \ \___  ( ( \ \_)) 
(_/    \__/      \____/    ()_)  \_\    \____\  )_) \__/  
```
Docker start-up framework for building KustomMad™ applications

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


## Configuration

### Applications
- API
http://api.app.dev/ -> http://localhost:4000
- UI
http://elm.app.dev/ -> http://localhost:8000
http://polymer.app.dev/ -> http://localhost:8081
- DOCS
http://docs.app.dev/ -> http://localhost:4444
- DB
http://db.app.dev -> http://localhost:5984
http://db.app.dev/_utils/

## Monitor and alert

- Monitoring & Alerts
http://monitor.app.dev/ -> http://localhost:3000
http://alert.app.dev/ -> http://localhost:9093
http://log.app.dev/ -> http://localhost:5601


## Usage

### Run all services

```sh
docker-compose -f docker/docker-compose.dev.yml up --build
```

// docker system prune -a
# get container IP
//docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id

## Resources
- http://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images
