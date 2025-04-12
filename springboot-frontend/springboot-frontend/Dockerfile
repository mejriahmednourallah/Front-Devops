FROM node:20-alpine

WORKDIR /app

# Copy dependency files first for better caching
COPY package*.json ./

# Install all deps including devDependencies
RUN npm install

# Copy the rest of the source code
COPY . .

EXPOSE 4200

# Use npx to run Angular CLI from local node_modules
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
