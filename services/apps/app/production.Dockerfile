# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_IMG=node
ARG NODE_VERSION=9-alpine
ARG APP_ROOT
ARG NODE_ENV

FROM $NODE_IMG:$NODE_VERSION AS base
ENV APP_ROOT ${APP_ROOT:-/usr/src/app}
ENV NODE_ENV ${NODE_ENV:-production}
RUN mkdir -p "$APP_ROOT"
COPY . $APP_ROOT
WORKDIR $APP_ROOT
###########################
# Build stage
###########################
RUN echo "Build stage"
ADD package.json /tmp/package.json
# Provides cached layer for node_modules
RUN cd /tmp && npm install --only development --loglevel error

RUN cd $APP_ROOT && yarn add install --flat --production
RUN cp -a /tmp/node_modules $APP_ROOT/
ENV PATH $APP_ROOT/node_modules/.bin:$PATH

RUN npm run build
###########################
# Copy assets stage
###########################
RUN echo "Copy assets stage $NODE_ENV"
RUN ls -la

FROM $NODE_IMG:$NODE_VERSION
ARG BUILD_PATH
ENV APP_ROOT ${APP_ROOT:-/usr/src/app}
ENV BUILD_PATH ${BUILD_PATH:-/usr/share/nginx/html}
RUN mkdir -p $BUILD_PATH
COPY --from=base $APP_ROOT/build $BUILD_PATH
VOLUME $BUILD_PATH
