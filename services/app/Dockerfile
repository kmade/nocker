# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_IMG=node
ARG NODE_VERSION=9-alpine
ARG POLYMER_CLI_VERSION=latest
ARG PORT=80
ARG NODE_ENV=production

# ---- Base Node ----
FROM $NODE_IMG:$NODE_VERSION AS base
EXPOSE $PORT 8080 8081
# execute command inside the container
RUN mkdir -p /usr/src/app
# set working directory
WORKDIR /usr/src/app
# install git
#RUN apk add --no-cache git

HEALTHCHECK CMD curl -fs http://localhost:$PORT || exit 1

ENV PORT $PORT
ENV NODE_ENV $NODE_ENV

RUN npm i -g polymer-cli@$POLYMER_CLI_VERSION --loglevel error --unsafe-perm
# copy project file
COPY package.json ./
RUN npm install --loglevel error --production
# similar to COPY command
# while ADD has some features (like local-only tar extraction and remote URL support)
ADD ./ /usr/src/app
# triggered when you run or exec the container
# similarly to ENTRYPOINT it allows you to override the command
CMD ["npm","start"]
# or CMD npm start # (shell form)

