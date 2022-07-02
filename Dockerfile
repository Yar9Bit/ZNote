# этап сборки (build stage)
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY babel.config.js .
COPY public public
COPY src src
RUN npm run build

# этап production (production-stage)
FROM nginx:1.20-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx_prod.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]