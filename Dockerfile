# syntax=docker/dockerfile:1

## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2b: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci

ARG API_BASE_URL
ARG API_AUTH_KEY

ENV API_BASE_URL=$API_BASE_URL
ENV API_AUTH_KEY=$API_AUTH_KEY

## Build the static site.
RUN npm run build

# Stage 3a: Serve with `docusaurus serve`.
FROM prod as serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000

ENV NODE_ENV=production
ENV API_BASE_URL=$API_BASE_URL
ENV API_AUTH_KEY=$API_AUTH_KEY
## Run the production server.
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]