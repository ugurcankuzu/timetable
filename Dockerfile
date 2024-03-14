FROM node:18

WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev
