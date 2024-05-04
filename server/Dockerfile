FROM node:18
WORKDIR /app
COPY package.json yarn.lock prisma ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8000
CMD [ "yarn", "run", "start:prod" ]