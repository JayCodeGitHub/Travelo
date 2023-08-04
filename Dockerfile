FROM node:16

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app

RUN npm install

COPY . /app

RUN npx prisma generate

CMD npm run dev
