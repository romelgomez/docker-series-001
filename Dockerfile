FROM node:20-alpine AS base

WORKDIR /app

RUN ls -l

COPY server.js .

EXPOSE 3000

ENV PORT 3000

CMD node server.js
