FROM node:10

WORKDIR /great/src/app
COPY package.json .
RUN npm i

EXPOSE 3000

COPY . .
CMD ["npm", "run", "server"]