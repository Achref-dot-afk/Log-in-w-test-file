FROM node:lts

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD ["node","index.js"]