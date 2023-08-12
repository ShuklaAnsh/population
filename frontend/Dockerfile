FROM node:18-alpine
WORKDIR /app
COPY . .

# install deps
RUN npm ci

# build the backend
RUN npm run build

# Use vite's preview server for demo
# Vite preview on port 4001
EXPOSE 4001
ENTRYPOINT [ "npm", "run", "preview"]
