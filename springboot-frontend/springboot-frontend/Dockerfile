# Use Node 18 (or a later version) as the base image to meet Angular CLI requirements
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose port 4200 where the Angular app runs
EXPOSE 4200

# Run the Angular app with the correct host and port configurations
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
