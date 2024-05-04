# stage 1 - build react app first
FROM node:18 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# stage 2 - serve the react app on nginx
FROM nginx:latest
USER root
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]