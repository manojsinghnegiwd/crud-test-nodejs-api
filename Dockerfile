FROM globegitter/alpine-yarn:0.27.5-node-8.1.3-ssh

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]
