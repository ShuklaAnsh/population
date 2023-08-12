FROM node:18-alpine
WORKDIR /app
COPY . .

# install deps
RUN npm ci
# generate gql typings
RUN npm run gen:gqlcode
# build the backend
RUN npm run build

# API endpoint on port 4000
EXPOSE 4000
ENTRYPOINT [ "npm", "run", "start"]
