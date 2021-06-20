FROM node:14-alpine3.10
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run typeorm migration:generate -- -n PostRefactoring  
CMD ["npm", "run", "startDev"]