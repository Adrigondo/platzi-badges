FROM node:22
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN npm install
CMD json-server --port 3000 --watch db.json