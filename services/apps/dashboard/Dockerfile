# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_IMG=node
ARG NODE_VERSION=9-alpine
ARG PORT=80
ARG NODE_ENV=production
# ---- Base Node ----
FROM $NODE_IMG:$NODE_VERSION AS app
EXPOSE $PORT 8080
ENV NODE_ENV $NODE_ENV
ENV APP_ROOT /usr/src/app
# execute command inside the container
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

RUN apk add --no-cache curl
HEALTHCHECK CMD curl -fs http://localhost:$PORT || exit 1

ENV PORT $PORT

# copy project file
ADD package.json /tmp/package.json
# Provides cached layer for node_modules
RUN cd /tmp && yarn
RUN cp -a /tmp/node_modules $APP_ROOT/

ENV PATH $APP_ROOT/node_modules/.bin:$PATH

# triggered when you run or exec the container
# similarly to ENTRYPOINT it allows you to override the command
CMD ["npm","run","start:dev"]
# or CMD npm start # (shell form)

VOLUME $APP_ROOT
