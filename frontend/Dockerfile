FROM node:10
WORKDIR /great/src

COPY package.json .
RUN npm install

EXPOSE 4000
COPY . .
CMD ["npm", "run", "start"]