###--- STAGE 1 - Development ---###
FROM node:12-alpine as DEV
ENV NODE_ENV=dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

###--- STAGE 2 - Build ---###
FROM node:12-alpine as BUILD
WORKDIR /usr/src/app
COPY --from=DEV /usr/src/app/package*.json ./
COPY --from=DEV /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build


###--- STAGE 3 - Production ---###
FROM node:12-alpine as PROD 
ENV NODE_ENV=prod
WORKDIR /usr/src/app
COPY --from=BUILD /usr/src/app/package*.json ./
COPY --from=BUILD /usr/src/app/dist ./dist
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "/usr/src/app/dist/index.js"]
