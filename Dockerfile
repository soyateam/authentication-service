FROM node:12-alpine as BUILD
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine as PROD
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/package.json /usr/src/app/package-lock.json ./
COPY --from=0 /usr/src/app/dist ./dist
COPY --from=0 /usr/src/app/utils ./utils
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]