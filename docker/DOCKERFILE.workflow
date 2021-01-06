FROM node:12.14.1 as Builder

COPY ./projects/koa-workflow/app /workflow

WORKDIR /workflow

RUN npm install
RUN npm rebuild

# real image
FROM node:12.14.1-slim as App

WORKDIR /workflow

COPY --from=Builder /workflow/node_modules ./node_modules

# add `node_modules/.bin` to $PATH
ENV PATH /workflow/node_modules/.bin:$PATH

COPY --from=Builder /workflow/src /workflow/src

COPY ./projects/koa-workflow/app/package.json /workflow/package.json
COPY ./projects/koa-workflow/app/bootstrap.sh /workflow/bootstrap.sh
COPY ./projects/koa-workflow/app/knexfile.js /workflow/knexfile.js

ENTRYPOINT ["node", "/workflow/src/server.js"]
