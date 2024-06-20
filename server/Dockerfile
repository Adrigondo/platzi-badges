FROM node:22
WORKDIR /usr/src/app
COPY . .
EXPOSE 3001
RUN npm install --save json-server
CMD json-server --port 3001 --watch db.json