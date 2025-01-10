FROM node:20 AS build

WORKDIR /ui

COPY package.json .

RUN yarn

COPY . .

RUN yarn build



# Run app with  Nginx
FROM nginx:alpine

COPY --from=build /ui/build /usr/share/nginx/html


COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# start nginx server
CMD ["nginx", "-g", "daemon off;"]
