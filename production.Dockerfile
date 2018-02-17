ARG NGINX_IMG=nginx:alpine

FROM kmade.net:5000/km/app as app
FROM kmade.net:5000/km/dashboard as dashboard

FROM $NGINX_IMG
RUN mkdir -p /usr/share/nginx/html

COPY ./configuration/nginx/nginx.prod.conf /etc/nginx/nginx.conf:ro
#COPY ./configuration/ssl/ /etc/nginx/ssl
COPY --from=app /usr/share/nginx/html /usr/share/nginx/html
COPY --from=dashboard /usr/share/nginx/html /usr/share/nginx/html/dashboard

RUN ls -la /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]