FROM node:16 

WORKDIR /appfront

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 3001

CMD ["npm" ,"start"]

