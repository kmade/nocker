ARG NGINX_IMG=nginx:alpine

FROM kmade.net:5000/km/app

FROM $NGINX_IMG
RUN mkdir -p /usr/share/nginx/html
