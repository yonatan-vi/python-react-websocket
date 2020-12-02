FROM node:12.20.0-stretch-slim
WORKDIR '/app'

COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]