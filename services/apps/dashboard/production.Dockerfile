# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_IMG=node
ARG NODE_VERSION=9-alpine
ARG APP_ROOT

FROM $NODE_IMG:$NODE_VERSION AS base
ENV APP_ROOT ${APP_ROOT:-/usr/src/app}
ENV NODE_ENV $NODE_ENV
RUN mkdir -p "$APP_ROOT"
COPY . $APP_ROOT
WORKDIR $APP_ROOT

###########################
# Build stage
###########################

RUN echo "Build stage"
RUN yarn
RUN npm run build
###########################
# Copy assets stage
###########################
RUN echo "Copy assets stage"

FROM $NODE_IMG:$NODE_VERSION
ARG BUILD_PATH
ENV APP_ROOT ${APP_ROOT:-/usr/src/app}
ENV BUILD_PATH ${BUILD_PATH:-/usr/share/nginx/html}
RUN mkdir -p $BUILD_PATH
COPY --from=base $APP_ROOT/build $BUILD_PATH
VOLUME $BUILD_PATH
