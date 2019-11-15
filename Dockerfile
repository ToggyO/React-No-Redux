FROM node:12.13.0-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build


FROM nginx:1.12-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /bin/apple-app-site-association.json /usr/share/nginx/html/ios/apple-app-site-association.json
COPY /bin/assetlinks.json /usr/share/nginx/html/android/assetlinks.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]